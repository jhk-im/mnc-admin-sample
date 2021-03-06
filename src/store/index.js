import Vue from "vue";
import Vuex from "vuex";
import pathify from "@/plugins/vuex-pathify";
//import { auth } from "./auth.module";

// Modules
import * as modules from "./modules";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules,
  plugins: [pathify.plugin],
});

store.dispatch("app/init");

export default store;

export const ROOT_DISPATCH = Object.freeze({ root: true });

// Vue.use(Vuex);

// export default new Vuex.Store({
//   modules: {
//     auth
//   }
// });
