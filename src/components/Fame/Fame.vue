<template>
  <v-container>
    <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
      <v-layout row>
        <v-btn color="pink" dark block v-if="isEditor" @click="showCreateDialog = true" >
          Add Hall Of Fame Entry
        </v-btn>
      </v-layout>
      <CreateFame :showDialog="showCreateDialog" v-on:close="showCreateDialog = false"></CreateFame>
      <v-container grid-list-md>
        <v-layout row wrap>
            <FameCard v-for="dude in fameData" :dude="dude"
          :key="dude.id"></FameCard>
        </v-layout>
      </v-container>
    </v-flex>
  </v-container>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex'
  import FameCard from './FameCard'
  import CreateFame from './CreateFame'

  export default {
    components: {
      FameCard,
      CreateFame
    },
    methods: mapActions('fame', ['fetchData']),

    computed: {
      ...mapState('fame', ['fameData']),
      ...mapGetters('auth', ['isEditor'])
    },

    data () {
      return {
        logo_url: this.$urls.staticUrls.blog,
        showCreateDialog: false
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
