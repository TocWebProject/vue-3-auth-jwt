<template>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-3/4 flex flex-col sm:items-center items-start mx-auto p-20 bg-slate-800 rounded-md text-gray-100">
            <h1 class="text-3xl font-semibold text-gray-100">
              Hello user <span class="text-blue-400">{{ currentUser.username }}</span>
            </h1>
            <h2 class="mt-2 text-xl font-semibold">
              Vos informations personnelles : 
            </h2>
            <p class="mt-3 ">
            <strong>Token:</strong>
            {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
            </p>
            <p class="mt-1">
              <strong>Id:</strong>
              {{currentUser.id}}
            </p>
            <p >
              <strong>Email:</strong>
              {{currentUser.email}}
            </p>
            <strong class="mt-1">Roles:</strong>
            <ul>
                <li v-for="role in currentUser.roles" :key="role">{{role}}</li>
            </ul>
        </div>
      </div>
    </section>

</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>