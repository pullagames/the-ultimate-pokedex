export default {
  namespaced: true,
  state: {
    status: 0, // 0 = ready | 1 = loading
  },
  mutations: {
    SET_STATUS(state, payload) {
      state.status = payload;
    },
  },
  actions: {
    async setStatus({ commit }, payload) {
      await commit('SET_STATUS', payload);
    },
  },
};
