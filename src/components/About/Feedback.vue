<template>
  <v-flex d-flex xs12 sm6 md4 >
    <v-card class="elevation-0 transparent">
      <v-card-title primary-title>
        <div class="headline">{{ feedback.title }}</div>
      </v-card-title>
      <v-card-text>
        {{ feedback.description }}
        <v-form v-model="valid" ref="form" lazy-validation>
          <v-text-field
            label="Name"
            v-model="name"
          >
          </v-text-field>
          <v-text-field
            label="Feedback"
            v-model="feedbackModel"
            :rules="feedbackRules"
            required
          >
          </v-text-field>
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
  </v-flex>
</template>

<script>
  export default {
    props: ['feedback'],
    data: () => ({
      valid: false,
      name: '',

      feedbackModel: '',
      feedbackRules: [
        (v) => !!v || 'Feedback is required'
      ]
    }),

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          this.$refs.form.reset()
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>