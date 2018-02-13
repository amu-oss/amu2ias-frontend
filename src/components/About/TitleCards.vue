<template>
  <v-container grid-list-md>
    <v-layout row wrap  justify-space-around>
      <v-flex d-flex xs12 sm8 md8>
        <v-card raised>
          <v-card-title primary-title>
            <div class="display-2 grey--text text--darken-1">{{ aboutData.title }}</div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="subheading">
            {{ aboutData.content }}
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm4 md4>
        <v-card raised>
          <v-card-media :src="logo_url" height="250px" contain></v-card-media>
          <v-card-text class="subheading grey--text">{{ aboutData.caption }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['aboutData'],
    data () {
      return {
        logo_url: this.$urls.staticUrls.blog
      }
    }
  }
</script>