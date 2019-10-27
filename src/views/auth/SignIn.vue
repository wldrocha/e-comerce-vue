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
                <v-form v-model="valid">
                  <v-row class="d-flex flex-row">
                    <v-col justify="center">
                      <v-row>
                        <v-col>
                          <v-text-field
                            label="Nombre"
                            name="fistName"
                            v-model="user.name"
                            type="text"
                          />
                        </v-col>
                        <v-col>
                          <v-text-field
                            label="Apellido"
                            name="lastName"
                            v-model="user.lastName"
                            type="text"
                          />
                        </v-col>
                      </v-row>
                      <v-text-field
                        label="Correo Electrónico"
                        name="email"
                        v-model="user.email"
                        :rules="rules.emailRules"
                        type="email"
                        clearable
                      />
                      <v-row>
                        <v-col>
                          <v-text-field
                            label="Contraseña"
                            v-model="user.pass"
                            name="pass"
                            :rules="rules.passRules"
                            :type="showPassword ? 'text' : 'password'"
                            @click:append="showPassword = !showPassword"
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                          />
                        </v-col>
                        <v-col>
                          <v-text-field
                            label="Repita Contraseña"
                            v-model="user.passConfirmation"
                            name="passConfirmation"
                            :rules="rules.passConfirmationRules"
                            :type="showPassword ? 'text' : 'password'"
                            @click:append="showPassword = !showPassword"
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                          />
                        </v-col>
                      </v-row>
                      <v-col class="d-flex justify-center">
                        <v-btn
                          class="black white--text mt-5"
                          :disabled="!valid"
                          @click="register"
                        >Registrarse</v-btn>
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
  name: "Register",
  data: () => ({
    valid: false,
    showPassword: false,
    user: {
      email: "",
      name: "",
      lastName: "",
      pass: "",
      passConfirmation: ""
    },
    rules: {
      emailRules: [
        v => !!v || "su e-mail es requerido",
        v => /.+@.+\..+/.test(v) || "E-mail es invalido"
      ],
      nameRules: [
        v => !!v || "Su Nombre es requerido",
        v =>
          (v && v.length <= 10) || "El nombre debe poseer más de 10 caracteres"
      ],
      passRules: [
        v => !!v || "La contraseña es requerida",
        v =>
          (v && v.length >= 6) ||
          "Su contraseña debe poseer más de 5 caracteres"
      ],
      passConfirmationRules: [
        v => !!v || "La contraseña es requerida",
        v =>
          (v && v.length >= 6) ||
          "Su contraseña debe poseer más de 5 caracteres"
      ]
    }
  }),
  methods: {
    register() {
      let vm = this;
      let data = {
        firstName: vm.user.name,
        lastName: vm.user.lastName,
        email: vm.user.email,
        password: vm.user.pass
      };
      vm.$store
        .dispatch("Register", data)
        .then(response => {
          console.log(response);
          // vm.options.loading = false;
          // vm.snackbar.text = response.data.message;
          // vm.$emit("showSnackBar", vm.snackbar);
          vm.$router.push("/login");
        })
        .catch(err => {
          console.log(err)
          // vm.options.loading = false;
          // vm.snackbar.text = err.data.errors.message;
          // console.log("err", err);
          // vm.$emit("showSnackBar", vm.snackbar);
        });
    }
  }
};
</script>