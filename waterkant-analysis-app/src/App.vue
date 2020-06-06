<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h1>Waterkant Analysis App</h1>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <Content />
    </v-content>
    <v-footer
      color="primary"
      app
    >
      <span class="white--text">&copy; 2020 - C09-The Impact of Corona on Our Life</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Content from "./components/Content.vue";

export default Vue.extend({
  name: "App",

  components: {
    Content
  }
});
</script>
