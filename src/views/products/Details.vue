<template>
  <v-container>
    <v-row>
      <v-col>
        <v-container>
          <v-card>
            <v-row>
              <v-col>
                <v-card-title>
                  <h2 class="font-weight-regular text-xs-left display-2 ml-5">{{product.name}}</h2>
                </v-card-title>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-img
                  class="ml-10"
                  height="70%"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                  aspect-ratio="1"
                ></v-img>
              </v-col>
              <v-col cols="6">
                <v-row>
                  <v-col cols="12">
                    <v-card-subtitle class="display-1">Descripción</v-card-subtitle>
                  </v-col>
                  <v-col cols="12">
                    <v-rating
                      v-model="product.rating"
                      color="yellow darken-3"
                      empty-icon="$vuetify.icons.ratingFull"
                      half-increments
                      hover
                      class="text-xs-left"
                    ></v-rating>
                    <div class="grey--text ml-4">
                      <p>{{product.price}} </p>
                    </div>
                  </v-col>
                </v-row>
                <v-card-text>
                  <v-row>
                    <v-col>
                      <p
                        class="font-weight-regular"
                      >{{product.description}}</p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="5">
                      <v-select v-model="product.size" :items="product.size" label="Tallas"></v-select>
                    </v-col>
                    <v-col cols="6">
                      <v-btn large color="teal" block class="white--text mt-2">
                        <v-icon>mdi-cart</v-icon>Añadir
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-col>
            </v-row>
            <!-- <v-row>
              <v-col>
                <v-tabs class="black--text" centered >
                  <v-tab>Preguntas</v-tab>
                  <v-tab-item>
                    <v-container fluid>
                      <v-row justify="center">
                        <v-col cols="6">
                          <v-card>
                            <v-card-text>
                              <v-card-text>
                                <v-textarea
                                  auto-grow
                                  box
                                  label="Deja tu pregunta"
                                  class="mx-auto"
                                ></v-textarea>
                              </v-card-text>
                              <v-card-actions>
                                <v-btn
                                  class="white--text mx-auto"
                                  color="cyan darken-2"
                                  block
                                >enviar</v-btn>
                              </v-card-actions>
                            </v-card-text>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-tab-item>
                  <v-tab>Comentarios</v-tab>
                  <v-tab-item>
                    <v-container fluid>
                      <v-row justify="center">
                        <v-col cols="6">
                          <v-card>
                            <v-card-text>
                              <v-card-text>
                                <v-textarea
                                  auto-grow
                                  box
                                  label="Deja tu comentario"
                                  class="mx-auto"
                                ></v-textarea>
                              </v-card-text>
                              <v-card-actions>
                                <v-btn
                                  class="white--text mx-auto"
                                  color="cyan darken-2"
                                  block
                                >enviar</v-btn>
                              </v-card-actions>
                            </v-card-text>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-tab-item>
                </v-tabs>
              </v-col>
            </v-row> -->
          </v-card>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Details-product",
  data: () => ({
   product:''
  }),
  created(){
    this.product = this.getProductById(this.$route.params.id)
    console.log(this.product)
  },
  computed:{
    ...mapGetters({isAuthUser:"isAuthUser", getProductById:"getProductById"}),
    // filterProduct(){
    //   return this.products.filter(product => product._id = this.$route.params.productId)
    // },
  },
  methods:{
    filterProduct(){
      this.product = this.products.filter(product => product._id = this.$route.params.productId)
    }
  }
};
</script>