<template>
  <v-container>
    <v-row>
      <v-col>
        <v-container>
          <v-card>
            <v-form @submit="newProduct">
              <v-row>
                <v-col>
                  <v-card-title>
                    <v-row class="ml-1">
                      <v-col cols="6">
                        <v-text-field
                          outlined
                          class="font-weight-regular text-xs-left"
                          label="Nombre de su producto"
                          v-model="product.name"
                        ></v-text-field>
                      </v-col>
                      <v-select
                        v-model="product.supplier"
                        :items="suppliers"
                        item-text="name"
                        item-value="_id"
                        label="Seleccione el proveedor"
                      ></v-select>

                      <v-col cols="5">
                        <v-text-field
                          outlined
                          class="font-weight-regular text-xs-left"
                          label="Codigo de su producto"
                          v-model="product.code"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-card-title>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-card-text>
                    <v-row>
                      <v-col>
                        <v-text-field outlined label="Precio" v-model="product.price"></v-text-field>
                        <v-textarea
                          outlined
                          no-resivze
                          label="Descripción de su producto"
                          v-model="product.description"
                        ></v-textarea>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="5">
                        <v-select
                          v-model="product.size"
                          :items="size"
                          multiple
                          label="Seleccione la talla"
                        ></v-select>
                      </v-col>
                      <v-col cols="6">
                        <v-btn
                          large
                          color="teal"
                          block
                          class="white--text mt-2"
                          @click="newProduct"
                        >Guardar</v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-form>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Add-product",
  data: () => ({

    edit: true,
    product: {
      name: "",
      code: "",
      description: "",
      supplier: "",
      price: "",
      rating: 3,
      size: ""
    },
    size: [39, 40, 41, 42]
  }),
  created() {
    let vm = this;
    vm.$emit("showDrawer", true);
    vm.setSuppliers();
  },
  computed: {
    ...mapGetters({
      isAuthUser: "isAuthUser",
      suppliers: "getAllSuppliers"
    }),
  },
  methods: {
    newProduct() {
      let vm = this;      
      vm.$store
        .dispatch("AddProduct", vm.product)
        .then(response => {
            vm.$router.push("/productos");
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    
    },
    shopProduct() {
      console.log("estoy comprando el ", this.product);
    },
    setSuppliers() {
      let vm = this;
      vm.awaitRequest = true;
      vm.$store
        .dispatch("GetSuppliers")
        .then()
        .catch(error => console.log("error", error));
    }
  }
};
</script>