<template>
  <v-container>
    <v-row>
      <v-col cols="5" offset="1" v-for="(product, index) in products" :key="index">
        <v-card>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="product.name"></v-card-title>
              <p>{{product.quantity}}</p>
              <!-- <v-card-subtitle v-text="product.price"></v-card-subtitle> -->
            </div>
            <v-avatar class="ma-3" size="125" tile>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-btn color="cyan darken-2" dark bottom fixed right fab class="mb-5" @click="dialog = !dialog"></v-btn>
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Pago</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols=12>
                <v-select
                  outlined
                  v-model="payment.bank"
                  :items="banks"
                  label="Seleccione el banco emisor"
                ></v-select>
              </v-col>
              <v-col cols=12>
                <v-text-field
                  outlined
                  label="Coloca el número de referencia"
                  v-model="payment.reference"
                ></v-text-field>
              </v-col>
              <v-col cols=12>
                <v-text-field
                  outlined
                  class="font-weight-regular text-xs-left"
                  label="Cantidad pagada"
                  v-model="payment.price"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
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
      banks: ["banco de venezuela", "Banco Fondo Común", "Banesco", "exterior"],
      payment:{
          bank:'',
          reference: '',
          price: '',

      },
      
      products: [
        {
          name: "rs21",
          quantity: 2,
          price: 20222
        },
        {
          name: "ksks",
          quantity: 5,
          price: 2022
        },
        {
          name: "rshola21",
          quantity: 3,
          price: 204432
        }
      ]
    };
  }
};
</script>