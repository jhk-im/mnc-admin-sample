import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";
import i18n from "./i18n";
import { sync } from "vuex-router-sync";
import "./plugins";
import "./sass/overrides.sass";

Vue.config.productionTip = false;
//Vue.use(Vuex);

sync(store, router);

new Vue({
  router,
  vuetify,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
