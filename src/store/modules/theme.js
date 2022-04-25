import storage from '@/utils/storage.js';

export default {
  namespaced: true,
  state: {
    isDarkMode: false,
  },
  mutations: {
    SET_DARK_MODE(state, payload) {
      storage.setItem('isDarkMode', payload);
      state.isDarkMode = payload;
    },
  },
  actions: {
    async setDarkMode({ commit }, payload) {
      await commit('SET_DARK_MODE', payload);
    },
  },
};
