<template>
  <v-container grid-list-lg>
  <v-layout row wrap>
    <Blog v-for="i in 4">
    </Blog>
  </v-layout>
  </v-container>
</template>

<script>
  import Blog from './Blog'
  export default {
    components: {
      Blog
    }
  }
</script>