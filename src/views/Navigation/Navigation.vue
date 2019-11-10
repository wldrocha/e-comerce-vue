<template>
    <v-toolbar color="cyan lighten-1" class="white--text">
        <v-app-bar-nav-icon @click="showDrawer()" class="white--text"></v-app-bar-nav-icon>
        <v-toolbar-title>Ecomerce</v-toolbar-title>
        <!-- <v-text-field placeholder="Buscar"></v-text-field> -->
        <v-icon>mdi-cart-outline</v-icon>
      </v-toolbar>
    
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
