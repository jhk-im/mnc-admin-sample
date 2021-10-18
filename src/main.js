import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import vuetify from "./plugins/vuetify";
import Vuex from "vuex";
import "./plugins/i18n";
import "./plugins/base";
import "./plugins/chartist";
import "./sass/overrides.sass";

Vue.config.productionTip = false;
Vue.use(Vuex);

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
