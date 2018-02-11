<template>
  <v-menu
    offset-y
    :close-on-content-click="false"
    v-model="dropdown"
    v-if="userData"
    >
    <v-btn flat slot="activator">
      <v-avatar
        size="36px"
        class="mr-2"
        grey
        lighten-4>
        <img :src="avatar" alt="Avatar">
      </v-avatar>
      <span class="not-caps">{{ userData.name }}</span>
      <v-icon>{{ dropdownIcon }}</v-icon>
    </v-btn>
    <v-card>
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img :src="avatar" alt="Avatar">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ userData.name }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ designation }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn
                icon
                :class="starColor"
              >
                <v-icon>star</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list>
          <v-subheader>Account</v-subheader>
          <v-list-tile @click="goToAccount">
            <v-list-tile-action>
              <v-icon>people</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Profile</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="logout">
            <v-list-tile-action>
              <v-icon>lock_open</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
  </v-menu>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    data: () => ({
      dropdown: false,
      fav: true,
      menu: false,
      message: false,
      hints: true
    }),

    computed: {
      dropdownIcon () {
        return this.dropdown ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
      },

      starColor () {
        return this.isAdmin ? 'yellow--text' : this.isEditor ? 'blue--text' : 'grey--text'
      },

      ...mapGetters('auth', ['avatar', 'designation', 'isAdmin', 'isEditor']),
      ...mapState('auth', ['userData'])
    },

    methods: {
      goToAccount () {
        this.$router.push('/profile')
      },

      ...mapActions('auth', ['logout'])
    }
  }
</script>

<style scoped>
  .not-caps {
    text-transform: none;
  }
</style>
