<template>
    <v-toolbar color="cyan lighten-1" class="white--text">
        <v-app-bar-nav-icon @click="showDrawer()" class="white--text"></v-app-bar-nav-icon>
        <v-toolbar-title>Ecomerce</v-toolbar-title>
      </v-toolbar>
    <!-- <v-toolbar-side-icon color="white--text" @click="showDrawer()">
        <p>e-comerce</p>
    </v-toolbar-side-icon> -->
</template>
<script>
export default {
  name: "e-Navigation",
  props: ["isAuthUser", "isAuthToken"],
  methods: {
    showDrawer() {
      let vm = this;
      vm.$emit("showDrawerNav", true);
    },
  }
};
</script>
