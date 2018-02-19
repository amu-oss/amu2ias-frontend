<template>
  <v-flex d-flex xs12 sm6 md6 lg4>
    <v-card raised class="text-xs-center">
    <v-flex d-flex xs12 >
  <DeleteFame :deleteFame="deleteFame" :dude="dude" v-on:cancel-delete="deleteFame = false" />
</v-flex>
        <v-flex d-flex xs12 >
          <v-icon large color="amber">stars</v-icon>
        </v-flex>
        <v-flex d-flex xs12>
          <v-avatar size="200px" class="mt-2">
            <img :src="dude.imageURL" :alt="dude.fameContent.name">
          </v-avatar>
        </v-flex>
        <v-flex d-flex xs12>
          <v-card-text class="headline"> {{ dude.fameContent.name }} </v-card-text><br>
        </v-flex>
        <v-flex>
          <div class="title" color="grey--text">AIR: {{dude.fameContent.air}} </div><br>
          <div class="subheading grey--text">CSE {{dude.fameContent.year}} ({{dude.fameContent.stream}})</div><br>
          <div class="subheading">Some Links for the dude</div><br>
        </v-flex>
        <v-flex>
        <v-btn class="grey darken-2" v-if="isAdmin" dark block bottom @click="deleteEntry">
          Delete Entry
        </v-btn>
        </v-flex>
    </v-card>
  </v-flex>
</template>

<script>
  import DeleteFame from './DeleteFame'
  import {mapGetters} from 'vuex'
  export default {
    components: {
      DeleteFame
    },
    computed: mapGetters('auth', ['isAdmin']),
    props: ['dude'],
    data: () => ({
      deleteFame: false
    }),
    methods: {
      deleteEntry () {
        this.deleteFame = true
      }
    }
  }
</script>