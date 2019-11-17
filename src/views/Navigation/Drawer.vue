<template>
  <v-navigation-drawer temporary absolute v-model="dataDrawer.show" app class="blue lighten-3">
    <v-list>
      <v-list-item dense>
        <v-list-item-content>
          <v-list-item>
            <v-list-item-content  class="white--text">
              <h2>Bienvenido</h2>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-content>
      </v-list-item>
      <v-divider class="mb-3" />
      <v-list-item-group v-if="isAuthUser">
        <v-list-item v-for="(route, i) in routerDrawer.AuthPages" :key="i" class="white--text">
          <!-- <v-list-item-icon>
            <v-icon v-text="route.icon"></v-icon>
          </v-list-item-icon>-->
          <v-list-item-content>
            <v-list-item-title v-text="route.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="logout()">
          <v-list-item-content>
            <v-list-item-title>Cerrar Sesión</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
      <v-list-item-group v-if="!isAuthUser">
        <v-list-item v-for="(route, i) in routerDrawer.GuestPage" :key="i" class="white--text">
          <!-- <v-list-item-icon>
            <v-icon v-text="route.icon"></v-icon>
          </v-list-item-icon>-->
          <v-list-item-content :to="route.to">
            <v-list-item-title v-text="route.title" ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  props: ["dataDrawer"],
  name: "e-Drawer",
  data: () => ({
    routerDrawer: {
      GuestPage: [
        { title: "Iniciar sesión", to: "/iniciar-sesion" },
        { title: "Registrarse", to: "/registro" }
      ],
      AuthPages: [
        {
          title: "Mi Cuenta",
          icon: "person",
          to: "/user/dashboard/account"
        },
        {
          title: "Proveedores",
          icon: "contact_mail",
          to: "/proveedores"
        },
        {
          title: "Historial de pagos",
          icon: "history",
          to: "/user/dashboard/history-payment"
        }
      ]
    }
  }),
  computed:{
      ...mapGetters({
        isAuthUser: "isAuthUser",
      })
  },
  methods: {
    logout() {
      let vm = this;
      vm.$store.dispatch("Logout").then(path_ => {
        vm.$router.push(path_);
      });
    }
  }
};
</script>