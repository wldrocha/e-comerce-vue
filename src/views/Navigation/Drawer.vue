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
      <!-- <v-list-tile dense>
        <v-list-tile-content>
          <v-list-tile-content>
            <v-list-tile-title>
              <h2>Bienvenido</h2>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile-content>
      </v-list-tile>-->
      <!-- <v-list-tile avatar>
        <v-list-tile-avatar>
          <img src="../../assets/logo.png" />
        </v-list-tile-avatar>
      </v-list-tile>-->
      <v-divider class="mb-3" />
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  props: ["dataDrawer"],
  name: "e-Drawer",
  data() {
    return {
      // dataDrawer: {
      //   routesDrawer: {
      //     GuestPage: "Inicio"
      //   }
      // }
    };
  }
};
</script>