<template>
  <v-container>
    <v-layout row v-if="user">
      <v-flex xs12 sm8 lg6 xl4 offset-sm2 offset-lg3 offset-xl4 class="text-xs-center">
        <v-card color="indigo" dark>
            <div class="display-1 text-xs-center pt-3">You are already logged in!</div>
            <v-btn error large @click="logout" class="ma-3">Logout</v-btn>
          </v-card>
      </v-flex>
    </v-layout>
    <v-layout row v-show="!user">
      <v-flex xs12 sm8 lg6 xl4 offset-sm2 offset-lg3 offset-xl4>
        <v-card color="blue lighten-2" dark>
            <div class="display-1 text-xs-center pt-3">Sign In or Register</div>
            <div id="firebaseui-auth-container" class="pt-3 pb-3"></div>
          </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style src="firebaseui/dist/firebaseui.css"></style>

<script>
  import firebase from 'firebase'
  import firebaseui from 'firebaseui'

  export default {
    name: 'auth',
    computed: {
      user () {
        return this.$store.state.auth.user
      }
    },
    methods: {
      logout () {
        this.$store.auth.dispatch('logout')
      }
    },
    mounted () {
      var authUI = new firebaseui.auth.AuthUI(firebase.auth())
      var uiConfig = {
        signInSuccessUrl: '/',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
      }
      authUI.start('#firebaseui-auth-container', uiConfig)
    }
  }
</script>