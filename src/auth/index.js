const nonNullUserData = (user, property, defaultData) =>
  user && user[property]
    ? user[property]
    : defaultData

const getAvatar = user => nonNullUserData(user, 'avatar',
  'https://zhcet-backend.firebaseapp.com/static/img/account.svg')

function getRoles (user) {
  if (!user) {
    // If user is not present, no rules
    return []
  }

  if (!user.roles) {
    // User is not permitted to set roles, so they may be null on first app use
    // So we need to return basic role for this condition
    return [{role: 'USER', priority: 1}]
  }

  return user.roles
}

const getHighestRole = user => getRoles(user)
  .reduce((prev, curr) =>
    (curr.priority > prev.priority) ? curr : prev,
  {role: 'UNAUTHENTICATED', priority: 0})

const hasRole = (user, role) => getRoles(user)
  .filter(roleObj => roleObj.role === role)
  .length > 0

const getDesignation = user => [getHighestRole(user)]
  .map(roleObj => roleObj.role)
  .map(role => role.replace('_', ' '))
  .map(role => role.toLowerCase())
  .map(role => role.replace(/(^| )(\w)/g,
    s => s.toUpperCase())
  )[0]

export default {
  getAvatar,
  getDesignation,
  getRoles,
  getHighestRole,
  hasRole
}
