<template>
  <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
    <v-card>
      <v-card-title class="grey lighten-3" primary-title>
        <div class="headline">{{ blog.title }}</div>
      </v-card-title>
      <v-container>
        <v-layout row>
          <v-flex>
            <div class="subheading">By {{ blog.author }}</div>
            <div class="grey--text">{{ blog.created | formatDate }}</div>
          </v-flex>
        </v-layout>
        <v-chip outline color="primary">{{ blog.category }}</v-chip>
        <v-layout row v-if="tags.length > 0">
          <v-chip v-for="tag in tags" :key="tag" class="elevation-1">
            <v-icon left class="grey--text darken-5">label</v-icon>{{ tag }}
          </v-chip>
        </v-layout>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="blue">Read more</v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
  import moment from 'moment'

  export default {
    props: ['blog'],

    filters: {
      formatDate (isoDate) {
        return moment(isoDate).format('MMMM Do YYYY, h:mm:ss a')
      }
    },

    computed: {
      tags () {
        return (this.blog.tags || '').split(',').map(tag => tag.trim())
      }

    }
  }
</script>