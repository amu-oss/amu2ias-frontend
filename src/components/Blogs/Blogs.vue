<template>
  <v-container grid-list-lg>
  <v-layout row wrap>
    <Blog v-for="blog in blogs" :blog="blog">
    </Blog>
  </v-layout>
  </v-container>
</template>

<script>
  import Vuex from 'vuex'
  import Blog from './Blog'
  
  export default {
    components: {
      Blog
    },
    methods: Vuex.mapActions('blog', ['fetchBlogs']),
    computed: Vuex.mapGetters('blog', ['blogs']),
    data () {
      return {
        blogaa: {
          title: 'Some Tile',
          category: 'Some category',
          author: 'Mohd Omama',
          tags: 'Some tags',
          content: 'Some content'
        }
      }
    },
    mounted () {
      this.fetchBlogs()
    }
  }
</script>