<template>
<v-flex xs12 sm10 md8 offset-sm1 offset-md2>
  <v-card>
    <v-card-title primary-title style="backgroundColor: LightSlateGray" >
      <div>
        <div class="headline">{{ title }}</div>
      </div>
    </v-card-title>
    <v-card-text>
    <div>
    <div class="grey--text">Category: {{ category }}</div>
    <div class="grey--text">Author: {{ author }}</div>
    <div class="grey--text">Tags: {{ tags }}</div>
    </div>
    </v-card-text>
    <v-card-actions>
      <v-btn icon @click.native="show = !show">
        <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
      </v-btn>
    </v-card-actions>
      <v-card-text v-show="show">
        {{ description  }}
      </v-card-text>
  </v-card>
</v-flex>
</template>

<script>
export default {
  data () {
    return {
      logo_url: this.$urls.staticUrls.blog,
      show: false,
      title: 'First Blog',
      category: 'This is some category',
      description: 'This is some description',
      author: 'Mohd Omama',
      tags: 'tag1 tag2'
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