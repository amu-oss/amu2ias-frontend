<template>
  <v-app light>
    
    <v-navigation-drawer
      fixed
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      light
      app
    >
      <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Menu
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list dense class="pt-0">
      <v-list-tile v-for="item in items" :key="item.title" router v-bind:to="item.action">
          <v-icon>{{ item.icon }}</v-icon>
        <v-list-tile-content>
          <v-list-tile-title> &nbsp; {{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" light></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-if="!user" :key="'signin'" :to="'/signin'">
          <v-icon left>lock</v-icon>
          Sign In
        </v-btn>
        <v-btn flat v-if="user" :key="'signin'" @click="logout">
          <v-icon left>lock_open</v-icon>
          Log Out
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
    
    <v-footer :fixed="fixed" app>
      <span>&copy; Apache License</span>
    </v-footer>

  </v-app>

</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
        { icon: 'dashboard', title: 'Home', action: 'home' },
        { icon: 'grade', title: 'Hall of Fame', action: 'fame' },
        { icon: 'rss_feed', title: 'Blog', action: 'blog' },
        { icon: 'file_download', title: 'Downloads', action: 'downloads' },
        { icon: 'chat', title: 'Chat', action: 'chat' },
        { icon: 'account_circle', title: 'Account', action: 'account' },
        { icon: 'info', title: 'About', action: 'about' }
        ],
        miniVariant: false
      }
    },
    computed: {
      user () {
        return this.$store.state.auth.user
      },
      title () {
        return this.$route.name
      }
    },

    methods: {
      logout () {
        this.$store.dispatch('auth/logout')
      }
    }

  }
</script>
