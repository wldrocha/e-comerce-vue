<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col>
        <v-row>
          <v-col class="d-flex justify-center">
            <v-btn class="cyan lighten-1 white--text mr-2" to="/login">Iniciar Sesión</v-btn>
            <v-btn class="ml-2" to="/register">Registrarse</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-center">
            <v-card class="pa-5 mt-3 text-xs-left" width="550px">
              <h5
                class="mb-4 ml-3 headline"
              >Coloca tu correo electrónico y te enviaremos un link de recuperación</h5>
              <v-card-text>
                <v-form>
                  <v-row class="d-flex flex-row">
                    <v-col justify="center">
                      <v-text-field label="Correo Electrónico" name="email" type="email" clearable/>
                      <v-col class="d-flex justify-center">
                        <v-btn class="black white--text mt-5">Recuperar Cuenta</v-btn>
                      </v-col>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>