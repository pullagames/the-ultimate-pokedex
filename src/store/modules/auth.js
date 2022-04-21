import Repository from '@/store/repositories/factory.js';

const AuthRepository = Repository.get('auth');

export default {
  namespaced: true,
  state: {
    me: {},
  },
  mutations: {
    SET_CREDENTIALS(/* payload */) {
      // TODO: store access & refresh token - client side
    },
    REFRESH_CREDENTIALS(/* payload */) {
      // TODO: replace deprecated token - client side
    },
    GET_ME(state, payload) {
      state.me = payload;
    },
  },
  actions: {
    async register({ dispatch }, payload) {
      const { data } = await AuthRepository.register(payload);
      await dispatch('getAuthToken', data);
    },
    async getAuthToken({ commit }, payload) {
      await commit('SET_CREDENTIALS', payload);
      await commit('GET_ME');
    },
    async refreshToken({ commit }, payload) {
      await commit('REFRESH_CREDENTIALS', payload);
    },
  },
};
