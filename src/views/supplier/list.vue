<template>
  <v-container>
    <v-row>
      <v-col cols="10" offset="1">
        <v-card>
          <v-card-title>
            Proveedores
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Buscar"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table :headers="headers" :search="search" :items="suppliers">
            <template v-slot:item.action="{ item }">
              <v-icon small class="mr-2" @click="editSupplier(item)">mdi-pencil</v-icon>
              <v-icon small @click="deleteSupplier(item)">mdi-delete</v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <v-btn color="cyan darken-2" dark bottom fixed right fab class="mb-5" @click="dialog = !dialog">
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-container>
          <v-card-title>
            <h2 class="font-weight-regular display-1">Nuevo Proveedor</h2>
          </v-card-title>
          <v-card-text>
            <v-text-field label="Nombre" v-model="supplier.name"></v-text-field>
            <v-text-field label="Teléfono" type="tel" v-model="supplier.contact.phonenumber"></v-text-field>
            <!-- <v-text-field label="Url" type="url" v-model="supplier.contact.web"></v-text-field>
            <v-textarea label="Dirección" auto-grow row-height="1" v-model="supplier.address"></v-textarea> -->
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="newSupplier()">Guardar</v-btn>
            <v-btn text color="primary" @click="dialog = !dialog">Cerrar</v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      awaitRequest: true,
      dialog: false,
      search: "",
      headers: [
        {
          text: "Nombre",
          align: "left",
          value: "name"
        },
        { text: "Teléfono", value: "contact.phonenumber" },
        // { text: "Dirección", value: "address" },
        { text: "Acciones", value: "action", sortable: false }
      ],
      supplier: {
        name: "",
        address: "",
        contact: {
          phonenumber: "",
          web: ""
        }
      }
    };
  },
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
    filterInvoice() {
      let vm = this;
      return vm.suppliers.filter(invoice => {
        return invoice.refCode.match(vm.search);
      });
    }
  },
  methods: {
    setSuppliers() {
      let vm = this;
      vm.awaitRequest = true;
      vm.$store
        .dispatch("GetSuppliers")
        .then(res => {
          console.log(res);
          vm.awaitRequest = false;
        })
        .catch(error => console.log("error", error));
    },
    newSupplier() {
      let vm = this;
      vm.$store
        .dispatch("AddSupplier", vm.supplier)
        .then(Response => {})
        .catch(error => {});
      this.dialog = false;
    },
    editSupplier(supplier){
      this.supplier.name = supplier.name;
      this.supplier.contact.phonenumber = supplier.contact.phonenumber;
      this.dialog = true
    },
    deleteSupplier(supplier){
      this.dialog = true
    }
  }
};
</script>