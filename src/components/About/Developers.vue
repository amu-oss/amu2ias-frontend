<template>
  <v-container fluid grid-list-md>
    <v-expansion-panel popout>
        <v-expansion-panel-content class="green">
          <div slot="header" class="display-1 white--text">Developers</div>
          <v-container grid-list-md>
            <v-layout row wrap  justify-space-around>
              <v-flex d-flex xs12 md6 lg4 v-for="developer in developers" :key="developer.id">
                <v-card raised class="text-xs-center">
                    <v-flex d-flex xs12>
                    <v-avatar size="120px" class="mt-2">
                      <img :src="developer.avatar" :alt="developer.name">
                    </v-avatar>
                    </v-flex>
                    <v-flex d-flex xs12>
                       <v-card-text class="headline"> {{ developer.name }} </v-card-text><br>
                    </v-flex>
                    <v-flex>
                      <div class="body-1">{{ developer.about }}</div><br>
                    </v-flex>
                    <v-flex>
                      <a :href="developer.link" target="_blank" class="no-link">
                        <v-btn
                          light
                          small
                          fab
                        >
                          <v-icon>link</v-icon>
                        </v-btn>
                      </a>
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

<style scoped>
  .no-link {
    text-decoration: none
  }
</style>
