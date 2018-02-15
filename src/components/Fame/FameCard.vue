<template>
<v-flex d-flex xs12 sm6 md6 lg4>
  <v-card raised class="text-xs-center" color='amber'>
      <v-flex d-flex xs12>
      <v-avatar size="200px" class="mt-2">
        <img src="https://lh4.googleusercontent.com/-WPHLodvF-hc/AAAAAAAAAAI/AAAAAAAAE3A/945czOQqTbE/photo.jpg" alt="alt name">
      </v-avatar>
      </v-flex>
      <v-flex d-flex xs12>
         <v-card-text class="headline"> {{ dude.name }} </v-card-text><br>
      </v-flex>
      <v-flex>
        <div class="title" color="grey--text">AIR: {{dude.air}} </div><br>
        <div class="subheading">CSE {{dude.year}} ({{dude.category}})</div><br>
        <div class="subheading">Some Links for the dude</div><br>
      </v-flex>
  </v-card>
</v-flex>
</template>

<script>
  export default {
    props: ['dude']
  }
</script>