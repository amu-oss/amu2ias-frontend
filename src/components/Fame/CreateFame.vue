<template>
  <v-layout row justify-center>
      <div>Hello World</div>
      <v-dialog persistent v-model="showDialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">Send Notification</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="fameForm" v-model="valid" lazy-validation>
              <v-text-field label="Name" v-model="fameContent.name" :rules="rules" prepend-icon="person_pin" required></v-text-field>
              <v-text-field label="Image URL" v-model="fameContent.imageURL" :rules="rules" prepend-icon="stars" required></v-text-field>
              <v-text-field label="All India Rank" v-model="fameContent.air" :rules="rules" prepend-icon="stars" required></v-text-field>
              <v-text-field label="Stream (IES/IAS/IPS/other)" :rules="rules" v-model="fameContent.stream" prepend-icon="description" required></v-text-field>
              <v-text-field label="Year" prepend-icon="date_range"  :rules="rules" v-model="fameContent.year" required></v-text-field>

              <small>*indicates required field</small>
           </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="blue--text darken-1" flat  @click="$emit('close')">Close</v-btn>
            <v-btn class="blue--text darken-1" flat  @click="send">Send</v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>
    <v-snackbar
      bottom
      right
      left
      v-model="snackbar"
    >
      {{ snackbarText }}
      <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-layout>
</template>

<script>
  export default {
    props: ['showDialog'],
    data: () => ({
      valid: true,
      snackbar: false,
      snackbarText: 'New Hall of Fame entry added!',
      fameContent: {
        name: '',
        air: '',
        imageURL: '',
        stream: '',
        year: ''
      },
      rules: [
        (v) => !!v || 'This is a required field'
      ]
    }),
    methods: {
      send () {
        if (this.$refs.fameForm.validate()) {
          console.log(this.fameContent)
          this.$store.dispatch('fame/createFame', this.fameContent)
            .then(() => {
              this.snackbarText = 'New Hall of Fame entry added!'
              this.snackbar = true
              this.$refs.fameForm.reset()
            }).catch(error => {
              console.log(error)
              this.snackbarText = 'Error uploading data!'
              this.snackbar = true
            })
        }
      }
    }
  }
</script>