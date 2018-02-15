<template>
  <v-container>
    <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
      <v-container grid-list-md>
        <v-layout row wrap  justify-space-around>
            <FameCard v-for="dude in fameData" :dude="dude"
          :key="dude.id"></FameCard>
        </v-layout>
      </v-container>
    </v-flex>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import FameCard from './FameCard'

export default {
  components: {
    FameCard
  },
  methods: mapActions('fame', ['fetchData']),
  computed: mapState('fame', ['fameData']),
  data () {
    return {
      logo_url: this.$urls.staticUrls.blog
    }
  },
  created () {
    this.fetchData()
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
