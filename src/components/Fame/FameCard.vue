<template>
  <v-flex d-flex xs12 sm6 md6 lg4>
    <v-card raised class="text-xs-center">
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
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    props: ['dude']
  }
</script>