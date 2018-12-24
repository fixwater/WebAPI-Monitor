const state = {
  host: "",
  path: "",
  repeatTime: 0,
  repeatInterval: 0
};

const mutations = {
  SET_INFO(state, key, value) {
    state[key] = value;
  }
};

const actions = {
  setInfo({ commit }, key, value) {
    console.info("aaa");
    commit("SET_INFO", key, value);
  }
};

export default {
  state,
  mutations,
  actions
};
