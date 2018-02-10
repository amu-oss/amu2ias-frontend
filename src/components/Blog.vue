<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img id="logo" :src="logo_url" alt="Vuetify.js" class="mb-5">
        <blockquote>
          &#8220;This is the blog page &#8221;
          <footer>
            <small> 
              <em>&mdash;Thanks to Areeb Jamal</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      logo_url: this.$urls.staticUrls.blog
    }
  },
  head: {
    title () {
      return {
        inner: this.$route.name
      }
    }
  }
}
</script>