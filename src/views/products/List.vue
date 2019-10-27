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
          <v-card-title>Cafe Badilico</v-card-title>
          <v-card-text>
          <v-card-subtitle class="my-4 subtitle-1 black--text">$ •300</v-card-subtitle>
            <v-row align="center" class="mx-0">
              <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
              <div class="grey--text ml-4">4.5 (413)</div>
            </v-row>
            <div>Small plates, salads & sandwiches an inteimate setting with 12 indoor seats plus patio seating.</div>
          </v-card-text>
        </v-card>
      </v-hover>
      <!-- </v-col> -->
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Product-List",
  data: () => ({
    products: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  })
};
</script>
<style lang="css">
.product-hover{
  background: rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
}
</style>