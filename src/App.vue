<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

</script>

<template>
  <main class="">
  
    <header class="bg-gray-900 pattern min-h-screen">
        <div class="container px-6 mx-auto">
            <nav class="flex flex-col py-2 sm:flex-row sm:justify-between sm:items-center">
                <div>
                    <a href="#" class="text-2xl font-semibold text-white hover:text-gray-300">Sécurité Web</a>
                </div>

                <div class="flex items-center mt-2 -mx-2 sm:mt-0">
                    <a href="#" class="px-3 py-1 text-sm font-semibold text-white transition-colors duration-200 transform border-2 rounded-md hover:bg-gray-700">Se connecter</a>
                    <a href="#" class="px-3 py-2 mx-2 text-sm font-semibold text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-gray-800">Créer un compte</a>
                </div>
            </nav>

            <div class="flex flex-col items-center py-6 lg:h-[35rem] lg:flex-row">
                <div class="lg:w-1/2">
                    <h2 class="text-4xl font-semibold text-gray-100">Sécurité Web</h2>

                    <h3 class="text-2xl font-semibold text-gray-100">
                        Hello <span class="text-blue-400">user</span>
                    </h3>

                    <p class="mt-3 text-gray-100">Protégeons notre applicaiton face aux attaques classiques</p>
                </div>

                <div class="flex mt-8 lg:w-1/2 lg:justify-center lg:mt-0">
                    <div class="bg-white rounded-lg dark:bg-gray-800">
                        <div class="p-8 text-center">
                            <h2 class="text-2xl font-semibold text-gray-700 dark:text-white fo">Se connecter</h2>

                            <form action="#">
                                <div class="mt-4">
                                    <input class="block w-full px-4 py-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email" placeholder="Email address" aria-label="Email address">
                                    <input class="block w-full px-4 py-2 mt-4 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="password" placeholder="Password" aria-label="Password">
                                </div>

                                <div class="flex items-center justify-between mt-4">
                                    <a href="#" class="text-sm text-gray-600 dark:text-gray-200 hover:underline mr-4">Créer un compte</a>

                                    <button class="px-4 py-2 font-semibold text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-800 dark:focus:bg-gray-700">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
