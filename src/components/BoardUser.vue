<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-3/4 flex flex-col sm:items-center items-start mx-auto p-20 bg-slate-800 rounded-md">
          <h1 class="text-3xl font-semibold text-gray-100">
            Hello user <span class="text-blue-400">{{ currentUser.username }}</span>
          </h1>
          <h2 class="mt-3 text-xl text-gray-100">Contenu provenant de notre API:</h2>
          <p class="text-blue-200">{{ content }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import UserService from "../services/user.service";

export default {
  name: "User",
  data() {
    return {
      content: "",
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    UserService.getUserBoard().then(
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