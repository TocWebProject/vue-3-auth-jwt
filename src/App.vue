<template>
  <main class="bg-gray-900 pattern min-h-screen">
  
    <header class="text-gray-400 bg-transparent body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <router-link to="/home" class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                <span class="ml-3 text-xl">Sécurité Web</span>
            </router-link>
            <nav class="text-gray-200 md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <router-link to="/home" class="mr-5 border-b-2 border-transparent hover:text-gray-100 hover:font-semibold transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Home</router-link>
                <router-link to="/user" v-if="currentUser" class="mr-5 border-b-2 border-transparent hover:text-gray-100 hover:font-semibold transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">User Board</router-link>
                <router-link to="/admin" v-if="showAdminBoard" class="mr-5 border-b-2 border-transparent hover:text-gray-100 hover:font-semibold transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Admin Board</router-link>
            </nav>

            <div v-if="!currentUser" class="flex items-center justify-center w-full lg:w-auto">
                <router-link to="/login" class="flex items-center justify-center px-3 py-1 text-sm font-semibold text-white transition-colors duration-200 transform border-2 rounded-md hover:bg-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="ml-2">Se connecter</span>
                </router-link>
                <router-link to="/register" class="flex items-center justify-center px-3 py-2 mx-2 text-sm font-semibold text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  <span class="ml-2">Créer un compte</span>
                </router-link>
            </div>

            <div v-if="currentUser" class="flex items-center justify-center w-full lg:w-auto">
                <router-link to="/profile" class="flex items-center justify-center px-3 py-1 text-sm font-semibold text-white transition-colors duration-200 transform border-2 rounded-md hover:bg-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {{ currentUser.username }}
                </router-link>
                <a @click.prevent="logOut" class="px-3 py-2 mx-2 text-sm font-semibold text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-gray-800">Se déconnecter</a>
            </div>
        </div>
    </header>

    <section>
       <router-view />
    </section>

  </main>
</template>

<script>
  export default {
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      },
      showAdminBoard() {
        if (this.currentUser && this.currentUser['roles']) {
          return this.currentUser['roles'].includes('ROLE_ADMIN');
        }

        return false;
      },
      showModeratorBoard() {
        if (this.currentUser && this.currentUser['roles']) {
          return this.currentUser['roles'].includes('ROLE_MODERATOR');
        }

        return false;
      }
    },
    methods: {
      logOut() {
        this.$store.dispatch('auth/logout');
        this.$router.push('/login');
      }
    }
  };
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

 nav :hover,
 nav .router-link-active,
 nav .router-link-exact-active {
   cursor: pointer;
   font-weight: 600;
 }
</style>
