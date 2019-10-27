<template>
  <v-container grid-list-xs>
    <v-row>
      <v-col>
        <v-container>
          <v-card>
            <v-row>
              <v-col>
                <v-card-title>
                  <h2
                    class="font-weight-regular text-xs-left display-2 ml-5 mt-2 mb-4"
                  >Cafe Badilico</h2>
                </v-card-title>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="mx-10">
                <v-img
                  height="80%"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                  aspect-ratio="1.7"
                ></v-img>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-card-text>
          <v-card-subtitle class="my-4 subtitle-1 black--text">$ •300</v-card-subtitle>
            <v-row align="center" class="mx-0">
              <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
              <div class="grey--text ml-4">4.5 (413)</div>
            </v-row>
            <div>Small plates, salads & sandwiches an inteimate setting with 12 indoor seats plus patio seating.</div>
          </v-card-text>
<!--                 
                <h4
                  class="font-weight-regular text-xs-left subheading my-4"
                >Small plates, salads & sandwiches an inteimate setting with 12 indoor seats plus patio seating.</h4> -->
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Details-product"
};
</script>