import Repository from '@/store/repositories/factory.js';

import storage from '@/utils/storage.js';
import router from '@/router/index.js';

const AuthRepository = Repository.get('auth');

export default {
  namespaced: true,
  state: {
    me: undefined,
    loginError: undefined,
  },
  mutations: {
    SET_CREDENTIALS(state, payload) {
      storage.setItem('access', payload.access);
      storage.setItem('refresh', payload.refresh);
    },
    GET_ME(state, payload) {
      state.me = payload;
    },
    SET_LOGIN_ERROR(state, payload) {
      state.loginError = payload;
    },
    LOGOUT() {
      storage.deleteItem('access');
      storage.deleteItem('refresh');
    },
  },
  actions: {
    async register({ dispatch }, payload) {
      await AuthRepository.register(payload);
      await dispatch('getAuthToken', { username: payload.username, password: payload.password });
    },
    async getAuthToken({ commit, dispatch }, payload) {
      await AuthRepository.getAuthToken(payload).then((response) => {
        commit('SET_CREDENTIALS', response.data);
        commit('SET_LOGIN_ERROR', undefined);
      }).then(() => {
        router.push({ name: 'home' }).catch((err) => {});
      }).catch((err) => {
        commit('SET_LOGIN_ERROR', 'Il n\'existe pas de compte avec ces données.');
      });
    },
    async logout({ commit }) {
      await commit('LOGOUT');
      router.push({ name: 'auth' }).catch((err) => {});
    },
    async getMe({ commit }) {
      const { data } = await AuthRepository.getMe();
      await commit('GET_ME', data);
    },
  },
};
