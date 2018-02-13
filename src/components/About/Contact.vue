<template>
  <v-flex d-flex xs12 sm6 md4>
    <v-card class="elevation-0 transparent">
      <v-card-title primary-title>
        <div class="headline">{{ contact.title }}</div>
      </v-card-title>
      <v-card-text>
        {{ contact.description }}
      </v-card-text>
      <v-list class="transparent">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon class="blue--text text--lighten-2">phone</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ contact.phone }}
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon class="blue--text text--lighten-2">place</v-icon>
          </v-list-tile-action>
          <v-list-tile-content >
            {{ contact.address }}
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon class="blue--text text--lighten-2">email</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ contact.email }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    props: ['contact']
  }
</script>