<template>
<v-container>
<v-flex xs12 sm10 md8 offset-sm1 offset-md2>
  <v-container grid-list-md>
    <v-layout row wrap  justify-space-around>
      <v-flex d-flex xs12 sm8 md8>
      <v-card raised>
        <v-card-title primary-title>
        <div class="display-2 grey--text text--darken-1">About Us</div>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="subheading">
        Suno ghaur se duniya walo, buri nazar na hum pe daalo. Chahe jitna zor laga lo, sab se aage honge hindustani. Bahut bura rahi hu, desh ka ghaddar hu, bolo mere sang pakistan zindabad. Suno ghaur se duniya walo, buri nazar na hum pe daalo. Chahe jitna zor laga lo, sab se aage honge hindustani. Bahut bura rahi hu, desh ka ghaddar hu, bolo mere sang pakistan zindabad.
      </v-card-text>
      </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm4 md4>
      <v-card raised>
        <v-card-title primary-title>
        <div class="headline">Logo</div>
      </v-card-title>
      </v-card>
      </v-flex>
    </v-layout>
  </v-container>

  <v-container grid-list-md>
  <v-expansion-panel
  popout>
    <v-expansion-panel-content class="green">
    <div slot="header" class="display-1 white--text">Developers</div>
    <v-container grid-list-md>
    <v-layout row wrap  justify-space-around>
      <v-flex d-flex xs12 sm6 md6>
      <v-card raised>
        <v-card-title primary-title>
        <div class="display-2 grey--text text--darken-1">DEV1</div>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="subheading">
        This is developer 1
      </v-card-text>
      </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md6>
      <v-card raised>
        <v-card-title primary-title>
        <div class="display-2 grey--text text--darken-1">DEV2</div>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="subheading">
        This is developer 2
      </v-card-text>
      </v-card>
      </v-flex>
    </v-layout>
    </v-container>



    </v-expansion-panel-content>
  </v-expansion-panel>
  </v-container>
  

  <v-container grid-list-md>
  <v-layout row wrap  justify-space-around>

  <v-flex d-flex xs12 sm6 md4 >
    <v-card class="elevation-0 transparent">
      <v-card-title primary-title>
        <div class="headline">Feedback</div>
      </v-card-title>
      <v-card-text>
        If you have any grievance, suggestion pertaining to the website and its content, feel free to leave a feedback.

      <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      label="Name"
      v-model="name"
    ></v-text-field>
    <v-text-field
      label="Feedback"
      v-model="feedback"
      required
    ></v-text-field>

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
    >clear</v-btn>
  </v-form>
      </v-card-text>
    
    </v-card>
    </v-flex>
    <v-flex d-flex xs12 sm6 md4>
    <v-card class="elevation-0 transparent">
      <v-card-title primary-title>
        <div class="headline">Contact us</div>
      </v-card-title>
      <v-card-text>
        The Amu2IAS team is always responsive towards queries
      </v-card-text>
      <v-list class="transparent">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon class="blue--text text--lighten-2">phone</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            777-867-5309
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon class="blue--text text--lighten-2">place</v-icon>
          </v-list-tile-action>
          <v-list-tile-content >
            ZHCET, Aligarh Muslim University, Aligarh
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon class="blue--text text--lighten-2">email</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            amu2ias_admin@xyz.com
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
    </v-flex>
    
  </v-layout>
  </v-container>

</v-flex>
</v-container>
</template>

<script>
export default {
  data () {
    return {
      logo_url: this.$urls.staticUrls.blog
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