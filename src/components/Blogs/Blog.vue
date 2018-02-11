<template>
<v-flex xs12 sm10 md8 offset-sm1 offset-md2>
  <v-card>
    <v-card-title style="backgroundColor: LightSlateGray" >
      <div>
        <div class="headline">{{ blog.title }}</div>
      </div>
    </v-card-title>
    <v-container>
      <v-layout row >
      <v-flex xs6>
        <div>
          <div class="grey--text">Category: {{ blog.category }}</div>
          <div class="grey--text">Tags: {{ blog.tags }}</div>
        </div>
      </v-flex>
      <v-flex xs6>
        <div>
          <div class="grey--text">Author: {{ blog.author }}</div>
          <div class="grey--text">{{ blog.created | formatDate }}</div>
        </div>
      </v-flex>
      </v-layout>

      <v-card-actions>
        <v-btn icon @click.native="show = !show">
          <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
        </v-btn>
        
        <v-spacer></v-spacer>
        <v-btn flat color="blue">Read more...</v-btn>

      </v-card-actions>
      
      <v-card-text v-show="show" class="body-2">
          {{ blog.content }}
      </v-card-text>
    </v-container>
  </v-card>
</v-flex>
</template>

<script>
import moment from 'moment'

export default {
  props: ['blog'],
  data () {
    return {
      logo_url: this.$urls.staticUrls.blog,
      show: false
    }
  },
  filters: {
    formatDate (isoDate) {
      return moment(isoDate).format('MMMM Do YYYY')
    }
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