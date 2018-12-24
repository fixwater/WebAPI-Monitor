import Vue from "vue";
import Vuex from "vuex";

import { createPersistedState, createSharedMutations } from "vuex-electron";

import Modules from "./modules";
let { actions, mutations, state } = Modules;

Vue.use(Vuex);

export const RequestStore = new Vuex.Store({
  actions,
  mutations,
  state,
  plugins: [createPersistedState(), createSharedMutations()],
  strict: process.env.NODE_ENV !== "production"
});
