<template>
  <v-navigation-drawer temporary absolute v-model="dataDrawer.show" app class="blue lighten-3">
    <v-list>
      <v-list-item dense>
        <v-list-item-content>
          <v-list-item>
            <v-list-item-content class="white--text">
              <h2>Bienvenido</h2>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-content>
      </v-list-item>
      <v-divider class="mb-3" />
      <template v-if="isAuthUser && isAuthUser.level == 1">
        <v-list-item-group>
          <v-list-item
            v-for="(route, i) in routerDrawer.AdminPages"
            :key="i"
            class="white--text"
            :to="route.to"
          >
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
      </template>

      <template v-if="isAuthUser && isAuthUser.level == 0">
        <v-list-item-group>
          <v-list-item
            v-for="(route, i) in routerDrawer.AdminPages"
            :key="i"
            class="white--text"
            :to="route.to"
          >
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
      </template>
      <template v-if="!isAuthUser">
        <v-list-item-group>
          <v-list-item
            v-for="(route, i) in routerDrawer.GuestPage"
            :key="i"
            class="white--text"
            :to="route.to"
          >
            <!-- <v-list-item-icon>
            <v-icon v-text="route.icon"></v-icon>
            </v-list-item-icon>-->
            <v-list-item-content>
              <v-list-item-title v-text="route.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["dataDrawer"],
  name: "e-Drawer",
  data: () => ({
    routerDrawer: {
      GuestPage: [
        { title: "Iniciar sesión", to: "/iniciar-sesion" },
        { title: "Registrarse", to: "/registro" }
      ],
      AuthUser: [
        {
          title: "Mi Cuenta",
          icon: "person",
          to: "/user/dashboard/account"
        },
        {
          title: "Mi Carrito",
          icon: "person",
          to: "/"
        }
      ],
      AdminPages: [
        {
          title: "Proveedores",
          icon: "contact_mail",
          to: "/proveedores"
        },
        {
          title: "Inventario",
          icon: "history",
          to: "/productos"
        }
      ]
    }
  }),
  computed: {
    ...mapGetters({
      isAuthUser: "isAuthUser"
    })
  },
  methods: {
    logout() {
      let vm = this;
      vm.$store.dispatch("Logout").then();
    }
  }
};
</script>