<template>
  <v-container>
    <v-row align="center" justify="center">
      <!-- <v-col v-for="(product, i) in products" :key="i" class="ma-0 mb-0"> -->
      <v-hover v-for="(product, i) in products" :key="i">
        <v-card class="mx-5 my-4 product-hover" max-width="275">
          <v-img height="230" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
          <div style="position:relative">
            <v-btn absolute color="cyan darken-2 " class="white--text" fab right top>
              <v-icon>mdi-cart</v-icon>
            </v-btn>
          </div>
          <v-card-title>{{product.name}}</v-card-title>
          <v-card-text>
            <v-card-subtitle class="my-4 subtitle-1 black--text">$ • {{product.price}}</v-card-subtitle>
            <!-- <v-row align="center" class="mx-0">
              <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
              <div class="grey--text ml-4">4.5 (413)</div>
            </v-row> -->
            <div>{{product.description}}</div>
          </v-card-text>
        </v-card>
      </v-hover>
      <v-btn color="cyan darken-2" dark bottom fixed right fab class="mb-5" to="/producto/nuevo">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
      <!-- <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        
        scrollable
      >
        <v-card>
          <v-toolbar flat dark color="blue">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Nuevo Producto</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn large color="teal" block class="white--text mt-2" @click="newProduct">Guardar</v-btn>
            </v-toolbar-items>
          </v-toolbar>
        </v-card>
      </v-dialog>-->
      <!-- </v-col> -->
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Product-List",
  data: () => ({
    dialog: false,
    product: {
      name: "",
      code: "",
      description: "",
      rating: 3,
      size: ""
    },
    size: [39, 40, 41, 42]
  }),
  created() {
    let vm = this;
    // vm.$emit("showDrawer", true);
    vm.setProducts();
  },
  computed: {
    ...mapGetters({
      isAuthUser: "isAuthUser",
      products: "getAllProducts"
    })
  },
  methods: {
     setProducts() {
      let vm = this;
      vm.awaitRequest = true;
      vm.$store
        .dispatch("GetProducts")
        .then(res => {
            // console.log(res.data);
            // vm.awaitRequest = false;
        })
        .catch(error => console.log("error", error));
    },
    newProduct() {
      let vm = this;
      vm.$store
        .dispatch("AddProduct", vm.product)
        .then(response => {
        })
        .catch(error => {
          console.log(error);
        });
      // this.dialog = false;
    },
    shopProduct() {
      console.log("estoy comprando el ", this.product);
    }
  }
};
</script>
<style lang="css">
.product-hover {
  background: rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
}
</style>