<template>
  <v-container fluid>
    <v-row align-content-center>
      <v-col class="ma-auto" align-self-center text-xs-center lg5>
        <v-btn class="cyan darken-2 white--text">Iniciar Sesión</v-btn>
        <v-btn>Registrarse</v-btn>
        <h5 class="mb-4 ml-3 headline">Ingresa tus datos</h5>
        <v-card class="pa-5 mt-3 text-xs-center">
          <h5 class="mb-5 ml-3 subheading">Coloca nueva contraseña</h5>
          <v-form v-model="valid">
            <v-row row wrap>
              <v-col xs5 class="ma-auto">
                <v-text-field label="Clave" name="password" type="password" />
              </v-col>
              <v-col xs5 class="ma-auto">
                <v-text-field
                  label="Repita clave"
                  name="passwordConfirmationRules"
                  type="password"
                />
              </v-col>
              <v-col class="text-xs-center" xs12>
                <v-btn class="black white--text mt-5" :disabled="!valid">{{ action }}</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "e-Home",
  data() {
    return {
      nameComponents: this.name,
      condition: false,
      dialog: false,
      valid: false,
      firstName: "",
      firstNameRules: [v => !!v || "Ingrese Nombre"],
      lastName: "",
      lastNameRules: [v => !!v || "Ingrese apellido"],
      email: "",
      emailRules: [
        v => !!v || "Ingrese correo valido",
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "Ingrese correo valido"
      ],
      password: "",
      passwordRules: [
        v => !!v || "Ingrese contraseña",
        v => v.length >= 6 || "la contraseña debe tener 6 o mas caracteres"
      ],
      password_confirmation: "",
      passwordConfirmationRules: [
        v => !!v || "Repita contraseña",
        v => v.length >= 6 || "la contraseña debe tener 6 o mas caracteres",
        v => v === this.password || "Las contraseñas no coinciden"
      ]
    };
  }
};
</script>
<style lang="css" scopped>
.red {
  width: 500px;
  background-color: red;
}
</style>

