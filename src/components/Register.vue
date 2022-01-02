<template>
    <div class="container px-6 mx-auto">
    
        <div class="flex flex-col items-center py-6 lg:h-[35rem] lg:flex-row">
            <section class="min-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Créer un compte</h2>

                <Form @submit="handleRegister" :validation-schema="schema">
                    <div v-if="!successful">

                        <div class="mt-4 w-60">
                            <div class="form-group grid justify-items-start">
                                <label class="block text-gray-200 text-sm font-bold mb-2" for="username">Nom d'utilisateur</label>
                                <Field name="username" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                <ErrorMessage name="username" class="block text-orange-400 text-sm font-bold mb-2 mt-1 ml-1" />
                            </div>

                            <div class="form-group grid justify-items-start mt-4">
                                <label class="block text-gray-200 text-sm font-bold mb-2" for="email">Email</label>
                                <Field name="email" type="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                <ErrorMessage name="email" class="block text-orange-400 text-sm font-bold mb-2 mt-1 ml-1" />
                            </div>

                            <div class="form-group grid justify-items-start mt-4">
                                <label class="ml-0 block text-gray-200 text-sm font-bold mb-1" for="password">Mot de passe</label>
                                <Field name="password" type="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                <ErrorMessage name="password" class="block text-orange-400 text-sm font-bold mb-2 mt-1 ml-1" />
                            </div>
                        </div>
                        <div class="flex justify-end mt-6">
                            <button :disabled="loading" class="px-4 py-2 font-semibold text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                <span v-show="loading">  
                                    <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                                    </svg>
                                </span>
                                <span>Créer un compte</span>
                            </button>
                        </div>
                    </div>
                </Form>
                <div v-if="message && successful === false" class="grid justify-items-start mt-4 rounded-md bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                    <p class="font-bold">Attention</p>
                    <p class="alert alert-danger" role="alert">
                        {{ message }}
                    </p>
                </div>
                <div v-if="message && successful === true" class="grid justify-items-start mt-4 rounded-md bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
                    <p class="font-bold">Bravo</p>
                    <p class="alert alert-danger" role="alert">
                        {{ message }}
                    </p>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import YupPassword from 'yup-password'
YupPassword(yup)

export default {
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup
        .string()
        .required("Votre nom est requis !")
        .min(3, "3 caractères requis au minimum !")
        .max(20, "20 caractères requis au maximum !"),
      email: yup
        .string()
        .required("L'email est requis !")
        .email("L'email est invalide")
        .max(50, "50 caractères requis au maximum !"),
      password: yup
        .string()
        .required("Le mot de passe est requis")
        .minLowercase(3, '3 caractères minuscules requis')
        .minUppercase(3, '3 caractères majuscules requis')
        .minNumbers(3, '3 chiffres requis')
        .minSymbols(1, '1 symbole requis')
        .min(10, "6 caractères requis au minimum !")
        .max(40, "40 caractères requis au maximum !"),
    });

    return {
      successful: false,
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", user).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>
