<template>
  <v-app>
    <v-container fluid class="px-0 py-0 my-0 mx-0">
      <Navigation @showDrawerNav="showDrawerNav"></Navigation>
      <Drawer :dataDrawer="drawer"></Drawer>
      <v-content>
          <router-view></router-view>
      </v-content>
    </v-container>
    <!-- <v-app-bar app>
      
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>-->
  </v-app>
</template>

<script>
import Drawer from "./views/Navigation/Drawer";
import Navigation from "./views/Navigation/Navigation";
export default {
  components: { Navigation, Drawer },
  name: "App",
  data() {
    return {
      drawer: {
        show: false
      }
    };
  },
  methods: {
    showDrawerNav(show) {
      let vm = this;
      vm.drawer.show = show;
    }
  }
};
</script>
