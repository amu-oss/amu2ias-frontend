<template>
  <v-container grid-list-md>
    <v-expansion-panel popout>
        <v-expansion-panel-content class="green">
          <div slot="header" class="display-1 white--text">Developers</div>
          <v-container grid-list-md>
            <v-layout row wrap  justify-space-around>
              <v-flex d-flex xs12 sm6 md6 v-for="developer in developers" key="developer.id">
                <v-card raised>
                    <v-flex d-flex xs12 sm12 md12>
                    <v-avatar size="150px">
                      <img :src="developer.avatar" :alt="developer.name">
                    </v-avatar>
                    </v-flex>
                    <v-flex d-flex xs12 sm12 md12>
                       <v-card-text class="text-md-center text-sm-center text-xs-center headline"> {{developer.name}} </v-card-text>
                    </v-flex>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-expansion-panel-content>
    </v-expansion-panel>
  </v-container>
</template>

<script>
  export default {
    props: ['developers']
  }
</script>