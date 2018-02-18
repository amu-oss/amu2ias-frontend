<template>
  <v-layout row justify-center>
      <v-dialog v-model="deleteFame" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">Delete Entry!</span>
          </v-card-title>
          <v-card-text>
            Are you sure you want to delete this entry?
          </v-card-text>
          <v-card-actions>
            <v-btn class="blue--text" flat @click="$emit('cancel-delete')">No</v-btn>
            <v-btn class="red--text" flat @click="deleteEntry">Yes</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
</template>

<script>
  export default {
    props: ['dude', 'deleteFame'],
    methods: {
      deleteEntry () {
        this.$store.dispatch('fame/removeFame', this.dude)
        this.$emit('cancel-delete')
      }
    }
  }
</script>
