<template>
<v-flex xs12 sm10 md8 offset-sm1 offset-md2>
  <v-card>
    <v-card-title primary-title style="backgroundColor: LightSlateGray" >
      <div>
        <div class="headline">{{ blog.title }}</div>
      </div>
    </v-card-title>
    <v-card-text>
    <div>
    <div class="grey--text">Category: {{ blog.category }}</div>
    <div class="grey--text">Author: {{ blog.author }}</div>
    <div class="grey--text">Tags: {{ blog.tags }}</div>
    </div>
    </v-card-text>
    <v-card-actions>
      <v-btn icon @click.native="show = !show">
        <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
      </v-btn>
    </v-card-actions>
      <v-card-text v-show="show">
        {{ blog.content }}
      </v-card-text>
  </v-card>
</v-flex>
</template>

<script>
export default {
  props: ['blog'],
  data () {
    return {
      logo_url: this.$urls.staticUrls.blog,
      show: false
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