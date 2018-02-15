<template>
  <v-container>
    <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
      <v-container grid-list-md>
        <v-layout row wrap  justify-space-around>
          <v-flex d-flex xs12 sm6 md6 lg4 v-for="developer in 4" :key="developer.id">
            <FameCard></FameCard>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-container>
</template>

<script>
import FameCard from './FameCard'

export default {
  components: {
    FameCard
  },
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
