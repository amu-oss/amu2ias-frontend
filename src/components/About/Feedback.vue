<template>
  <v-flex d-flex>
    <v-card class="elevation-1">
      <v-card-title primary-title>
        <div class="headline">{{ feedback.title }}</div>
      </v-card-title>
      <v-card-text>
        {{ feedback.description }}
        <v-form v-model="valid" ref="form" lazy-validation>
          <v-text-field
            label="Feedback"
            v-model="feedbackText"
            :rules="feedbackRules"
            required
          >
          </v-text-field>
          <v-progress-circular v-if="sending" indeterminate color="purple"></v-progress-circular>
          <v-btn
            @click="submit"
            :disabled="!valid"
            class="blue--text"
          >
            submit
          </v-btn>
          <v-btn 
          @click="clear"
          class="blue--text"
          >
            clear
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
    <v-snackbar
      bottom
      right
      left
      v-model="snackbar"
    >
      {{ snackbarText }}
      <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-flex>
</template>

<script>
  export default {
    props: ['feedback'],
    data: () => ({
      snackbar: false,
      snackbarText: 'Sent Feedback',
      sending: false,
      valid: false,
      feedbackText: '',
      feedbackRules: [
        (v) => !!v || 'Feedback is required'
      ]
    }),

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          this.sending = true
          this.$store.dispatch('about/sendFeedback', this.feedbackText)
            .then(() => {
              this.snackbarText = 'Sent Feedback Successfully'
              this.sending = false
              this.snackbar = true
              this.$refs.form.reset()
            }).catch(error => {
              console.log(error)
              this.snackbarText = 'Error Sending Feedback'
              this.sending = false
              this.snackbar = true
            })
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>