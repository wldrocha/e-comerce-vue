<template>
  <v-app>
    <v-container fluid class="px-0 py-0 my-0 mx-0">
      <Navigation @showDrawerNav="showDrawerNav"></Navigation>
      <Drawer :dataDrawer="drawer"></Drawer>
      <v-content>
        <v-container fluid>
          <router-view @showSnackBar="showSnackBar" @closeSnackBar="closeSnackBar"></router-view>
        </v-container>
      </v-content>
    </v-container>
    <v-snackbar
      v-model="snackbar.snackbar"
      :bottom="snackbar.y === 'bottom'"
      :left="snackbar.x === 'left'"
      :multi-line="snackbar.mode === 'multi-line'"
      :right="snackbar.x === 'right'"
      :timeout="snackbar.timeout"
      :top="snackbar.y === 'top'"
      :vertical="snackbar.mode === 'vertical'"
      :color="snackbar.color"
    >
      {{ snackbar.text }}
      <v-btn color="cyan darken-2" @click="closeSnackBar()">{{snackbar.btn ? snackbar.btn : 'Ok'}}</v-btn>
    </v-snackbar>
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
import { mapGetters } from "vuex";
export default {
  components: { Navigation, Drawer },
  name: "App",
  data() {
    return {
      drawer: {
        show: false
      },
      snackbar: {
        snackbar: false,
        btn: "",
        y: "bottom",
        x: null,
        mode: "",
        timeout: 6000,
        text: null,
        color: "cyan darken-2"
      }
    };
  },
  computed: {
    ...mapGetters({
      isAuthUser: "isAuthUser",
      products: "getAllProducts"
    })
  },
  methods: {
    MiddleWare() {
      let vm = this;
      if (vm.isAuthToken) {
        if (vm.checkToken) {
          vm.$store
            .dispatch("setUser")
            .then(() => {
              //vm.$router.push("/user/dashboard/account");
              vm.$store.commit("SET_LOADED", true);
              vm.GetUserStore();
            })
            .catch(() => {
              vm.logout();
              vm.$store.commit("SET_LOADED", true);
            });
        } else {
          vm.logout();
          vm.$store.commit("SET_LOADED", true);
        }
      } else {
        vm.logout();
        vm.$store.commit("SET_LOADED", true);
      }
    },
    showDrawerNav(show) {
      let vm = this;
      vm.drawer.show = show;
    },
    showSnackBar(snackBar) {
      let vm = this;
      vm.snackbar = snackBar;
    },
    closeSnackBar() {
      let vm = this;
      if (vm.isPhone) {
        window.open(vm.isPhone);
        vm.isPhone = "";
      }
      vm.snackbar = {
        snackbar: false,
        y: "bottom",
        x: null,
        mode: "",
        timeout: 6000,
        text: null,
        color: "cyan darken-2",
        btn: ""
      };
    },
    logout() {
      let vm = this;
      vm.$store.dispatch("Logout").then(path_ => {
        vm.$router.push(path_);
      });
    }
  },
  created() {
    let vm = this;
    //MIDDLEWARE
    vm.MiddleWare();
  }
};
</script>
