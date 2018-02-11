<template>
  <v-container grid-list-lg>
  <v-layout row wrap>
    <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
      <Blog v-for="blog in blogs" 
        :blog="blog"
        :key="blog.id"
      >
      </Blog>
    </v-flex>
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