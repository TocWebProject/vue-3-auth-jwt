<template>
    <div class="container px-6 mx-auto">
    
        <div class="flex flex-col items-center py-6 lg:h-[35rem] lg:flex-row">
            <div class="lg:w-1/2">
                <h1 class="text-4xl font-semibold text-gray-100">Sécurité Web</h1>

                <h2 class="text-3xl font-semibold text-gray-100">
                    Hello <span class="text-blue-400">user</span>
                </h2>

                <h3 class="mt-3 text-xl text-gray-100">Protégeons notre application face aux attaques classiques</h3>
            </div>

            <div class="flex mt-8 lg:w-1/2 lg:justify-center lg:mt-0">
                <div class="bg-white rounded-lg bg-gray-800">
                    <div class="p-8 max-w-xs">
                        <h2 class="text-2xl font-semibold text-white fo">Se connecter</h2>

                        <Form @submit="handleLogin" :validation-schema="schema">
                            <div class="mt-4 w-60">
                                <div class="form-group grid justify-items-start">
                                    <label class="block text-gray-200 text-sm font-bold mb-2" for="username">Nom d'utilisateur</label>
                                    <Field name="username" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                    <ErrorMessage name="username" class="block text-orange-400 text-sm font-bold mb-2 mt-1 ml-1" />
                                </div>

                                <div class="form-group mt-4 grid justify-items-start">
                                    <label class="block text-gray-200 text-sm font-bold mb-1" for="password">Mot de passe</label>
                                    <Field name="password" type="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                                    <ErrorMessage name="password" class="block text-orange-400 text-sm font-bold mb-2 mt-1 ml-1" />
                                </div>
                            </div>
                            <div class="flex items-center justify-center mt-4">
                                <button :disabled="loading" class="px-4 py-2 font-semibold text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                    <span v-show="loading">  
                                        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                                        </svg>
                                    </span>
                                    <span>Se connecter</span>
                                </button>
                            </div>
                            <div v-if="message" class="grid justify-items-start mt-4 rounded-md bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                                <p class="font-bold">Attention</p>
                                <p class="alert alert-danger" role="alert">
                                    {{ message }}
                                </p>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
    name: "Login",
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        const schema = yup.object().shape({
            username: yup.string().required("Le nom d'utilisateur est requis !"),
            password: yup.string().required("Le mot de passe est requis !"),
        });

        return {
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
    created() {
        if (this.loggedIn) {
            this.$router.push("/profile");
        }
    },
    methods: {
        handleLogin(user) {
            this.loading = true;

            this.$store.dispatch("auth/login", user).then(
                () => {
                this.$router.push("/user");
                },
                (error) => {
                this.loading = false;
                this.message =
                    (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();
                }
            );
        },
    },
};
</script>