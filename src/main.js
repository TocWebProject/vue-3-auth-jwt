import { createApp } from 'vue'
import App from './App.vue'
// import router from "./router";
// import store from "./store";
import { FontAwesomeIcon } from './plugins/font-awesome'
import './index.css'

createApp(App)
  // .use(router)
  // .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");