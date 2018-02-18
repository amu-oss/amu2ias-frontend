<template>
  <v-layout row justify-center>
    <v-dialog persistent v-model="showDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Create Entry</span>
        </v-card-title>
        <v-card-text>
          <v-form 
            ref="fameForm"
            v-model="valid" 
            lazy-validation
          >
            <v-text-field 
              label="Name" 
              v-model="famePayload.name" 
              :rules="rules" 
              prepend-icon="person_pin" 
              required></v-text-field>
            <v-btn 
              raised 
              class="blue lighten-2" 
              @click="onPickFile"
            >Upload Image</v-btn>
            <input 
              type="file" 
              style="display: none" 
              ref="imageInput" 
              accept="image/*"
              @change="onFilePicked">
            <img :src="imageURL" style="width:100%; max-width:600px;">
            <v-text-field 
              label="All India Rank" 
              v-model="famePayload.air" 
              :rules="rules" 
              prepend-icon="stars" 
              required
            ></v-text-field>
            <v-text-field
              label="Stream (IES/IAS/IPS/other)" 
              v-model="famePayload.stream" 
              :rules="rules" 
              prepend-icon="description"
              required></v-text-field>
            <v-text-field 
              label="Year"
              v-model="famePayload.year" 
              :rules="rules" 
              prepend-icon="date_range"  
              required
            ></v-text-field>
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
      imageURL: '',
      famePayload: {
        name: '',
        air: '',
        stream: '',
        year: '',
        image: null
      },
      rules: [
        (v) => !!v || 'This is a required field'
      ]
    }),
    methods: {
      onPickFile () {
        this.$refs.imageInput.click()
      },

      onFilePicked (event) {
        const files = event.target.files
        let filename = files[0].name
        if (filename.lastIndexOf('.') <= 0) {
          return alert('Please upload a valid image!')
        }
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          this.imageURL = fileReader.result
        })
        fileReader.readAsDataURL(files[0])
        this.famePayload.image = files[0]
      },

      send () {
        if (this.$refs.fameForm.validate()) {
          console.log('famePayload')
          this.$store.dispatch('fame/createFame', this.famePayload)
            .then(() => {
              this.snackbarText = 'New Hall of Fame entry added!'
              this.snackbar = true
              this.$refs.fameForm.reset()
              this.$emit('close')
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