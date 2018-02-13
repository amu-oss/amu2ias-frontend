<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2 class="text-xs-center">
        <div v-if="empty">
          <div v-if="loadingFailure">
            <img src="https://firebasestorage.googleapis.com/v0/b/amu2ias-firebase.appspot.com/o/static%2Fimg%2Fjingles-250.gif?alt=media&token=6a57385e-a667-4e78-b2b8-2d0e10388e2b" alt="Not Found">
            <div class="display-3 grey--text mb-3">Blogs not found</div>
          </div>
          <v-progress-linear v-else v-bind:indeterminate="true"></v-progress-linear>
        </div>
        <BlogCard v-else v-for="blog in blogs" 
          :blog="blog"
          :key="blog.id"
        />
        <div class="ma-2 text-xs-center">
          <v-fab-transition>
            <v-btn
              dark
              fab
              bottom
              right
              small
              :disabled="!prev" @click="fetchPrevious"
              color="pink"
            >
              <v-icon>arrow_back</v-icon>
            </v-btn>
          </v-fab-transition>
          <v-fab-transition>
            <v-btn
              dark
              fab
              bottom
              right
              small
              :disabled="!next" @click="fetchNext"
              color="pink"
            >
              <v-icon>arrow_forward</v-icon>
            </v-btn>
          </v-fab-transition>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  import BlogCard from './BlogCard'
  
  export default {
    components: {
      BlogCard
    },

    methods: mapActions('blog', ['fetchBlogs', 'fetchNext', 'fetchPrevious']),

    computed: {
      ...mapState('blog', ['blogs']),

      ...mapGetters('blog', ['empty', 'next', 'prev', 'loadingFailure'])
    },

    created () {
      this.fetchBlogs()
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