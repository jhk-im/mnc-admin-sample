/* eslint-disable no-unused-vars */
// Pathify
import { make } from "vuex-pathify";

// Data
const state = {
  drawer: null,
  drawerImage: true,
  mini: false,
  items: [
    {
      title: "대시보드",
      icon: "mdi-view-dashboard",
      to: "/",
    },
  ],
};

const mutations = make.mutations(state);

const actions = {
  ...make.actions(state),
  init: async ({ dispatch }) => {
    //
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
