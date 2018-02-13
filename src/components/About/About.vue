<template>
  <v-container>
    <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
      <TitleCards :aboutData="aboutData"></TitleCards>

      <v-container grid-list-md>
        <v-layout row wrap  justify-space-around>

          <Feedback :feedback="aboutData.feedback"></Feedback>

          <Contact :contact="aboutData.contact"></Contact>
        
        </v-layout>
      </v-container>

      <Developers :developers="aboutData.developers"></Developers>

    </v-flex>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TitleCards from './TitleCards'
import Developers from './Developers'
import Feedback from './Feedback'
import Contact from './Contact'

export default {
  components: {
    TitleCards,
    Developers,
    Feedback,
    Contact
  },
  data () {
    return {
      logo_url: this.$urls.staticUrls.blog
    }
  },

  computed: mapState('about', ['aboutData']),

  methods: mapActions('about', ['fetchData']),

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