<template>
  <v-container fluid class="fill-height">
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
                <v-form v-model="valid">
                  <v-row class="d-flex flex-row">
                    <v-col justify="center">
                      <v-text-field
                        label="Correo Electrónico"
                        v-model="user.email"
                        name="email"
                        :rules="rules.emailRules"
                        type="email"
                      />
                      <v-text-field
                        label="Contraseña"
                        v-model="user.pass"
                        name="pass"
                        :rules="rules.passRules"
                        :type="showPassword ? 'text' : 'password'"
                        @click:append="showPassword = !showPassword"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      />
                      <v-col class="d-flex justify-center">
                        <h3
                          style="cursor:pointer"
                          @click="$router.push('/forgot-password')"
                        >¿Olvidaste tu Contraseña?</h3>
                      </v-col>
                      <v-col class="d-flex justify-center">
                        <v-btn class="black white--text mt-5" :disabled="!valid" @click="login">Iniciar Sesión</v-btn>
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
    valid: false,
    options: {
      loading: false
    },
    user: {
      email: "",
      pass: ""
    },
    rules: {
      emailRules: [
        v => !!v || "su e-mail es requerido",
        v => /.+@.+\..+/.test(v) || "E-mail es invalido"
      ],
      passRules: [
        v => !!v || "La contraseña es requerida",
        v =>
          (v && v.length >= 6) ||
          "Su contraseña debe poseer más de 6 caracteres"
      ]
    },
    showPassword: false 
  }),
  methods: {
    login() {
      let vm = this;
      let data = { email: vm.user.email, password: vm.user.pass };
      vm.$store
        .dispatch("Login", data)
        .then((response) => {
          vm.$store
            .dispatch("setUser")
            .then(()=>{
              vm.$router.push("/products");
            })
            .catch(err => console.log(err))
        })
       
        .catch(err => {
          vm.options.loading = false;
          console.log('ocurrio un error', err)
        });
    }
  }
};
</script>