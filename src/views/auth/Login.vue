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
              <h4 class="mb-4 ml-3 headline">Ingresa tus datos</h4>
              <v-card-text>
                <v-form>
                  <v-row class="d-flex flex-row">
                    <v-col justify="center">
                      <v-text-field label="Correo Electrónico" name="email" :rules="emailRules" type="email" />
                      <v-text-field
                        label="Contraseña"
                        name="pass"
                        :rules="passRules"
                        type="password"
                        append-icon="mdi-eye"
                      />
                      <v-col class="d-flex justify-center">
                        <h3
                          style="cursor:pointer"
                          @click="$router.push('/forgot-password')"
                        >¿Olvidaste tu Contraseña?</h3>
                      </v-col>
                      <v-col class="d-flex justify-center">
                        <v-btn class="black white--text mt-5">Iniciar Sesión</v-btn>
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
<script>
export default {
  name: "Login",
  data: () => ({
    email: "",
    emailRules: [
      v => !!v || "su e-mail es requerido",
      v => /.+@.+\..+/.test(v) || "E-mail es invalido"
    ],
    name: "",
    nameRules: [
      v => !!v || "Su Nombre es requerido",
      v => (v && v.length <= 10) || "El nombre debe poseer más de 10 caracteres"
    ],
    pass: "",
    passRules: [
      v => !!v || "La contraseña es requerida",
      v => v && v.length >= 6 || "Su contraseña debe poseer más de 6 caracteres"
    ],
  })
};
</script>