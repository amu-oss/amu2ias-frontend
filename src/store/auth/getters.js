import auth from '@/auth'

export default {
  authenticated: state => state.user !== null,

  roles: state => auth.getRoles(state.userData),

  designation: state => auth.getDesignation(state.userData),

  isAdmin: (state, getters) => auth.hasRole(state.userData, 'ADMIN'),

  isEditor: (state, getters) => auth.hasRole(state.userData, 'EDITOR'),

  avatar: state => auth.getAvatar(state.userData)
}
