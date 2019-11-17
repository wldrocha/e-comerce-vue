<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-select
          outlined
          v-model="payment.bank"
          :items="banks"
          label="Seleccione el banco emisor"
        ></v-select>
      </v-col>
      <v-col cols="6">
        <v-text-field outlined label="Coloca el número de referencia" v-model="payment.reference"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field
          outlined
          class="font-weight-regular text-xs-left"
          label="Cantidad pagada"
          v-model="payment.price"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Payment",

  data: () => ({
    banks: ["banco de venezuela", "Banco Fondo Común", "Banesco", "exterior"],
    payment:{
        bank:'',
        reference: '',
        price: '',

    }
  })
};
</script>