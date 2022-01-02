<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div v-if="!currentUser" class="lg:w-3/4 flex flex-col sm:flex-row sm:items-center items-start mx-auto p-20 bg-slate-800 rounded-md">
        <div class="w-2/3">
          <h1 class="text-4xl font-semibold text-gray-100">Sécurité Web</h1>
          <h2 class="text-3xl font-semibold text-gray-100">
            Hello <span class="text-blue-400">user</span>
          </h2>
          <h3 class="mt-3 text-xl text-gray-100">Contenu provenant de notre API:</h3>
          <p class="text-gray-100">{{ content }}</p>
        </div>
        <div class="w-1/3">
          <router-link to="/login" class="flex-shrink-0 px-4 py-2 font-semibold text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Se connecter</router-link>
        </div>
      </div>
      <div v-else class="lg:w-3/4 flex flex-col sm:flex-row sm:items-center items-start mx-auto p-20 bg-slate-800 rounded-md">
        <div class="w-full">
          <h1 class="text-4xl font-semibold text-gray-100">Sécurité Web</h1>
          <h2 class="text-3xl font-semibold text-gray-100">
            Hello <span class="text-blue-400">user</span>
          </h2>
          <h3 class="mt-3 text-xl text-gray-100">Contenu provenant de notre API:</h3>
          <p class="text-blue-200">{{ content }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UserService from "../services/user.service";

export default {
  name: "Home",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>