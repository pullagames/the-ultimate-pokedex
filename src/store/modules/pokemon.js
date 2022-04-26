import Repository from '@/store/repositories/factory.js';

import storage from '@/utils/storage';

const Raw = Repository.get('raw');
const PokemonRepository = Repository.get('pokemon');

export default {
  namespaced: true,
  state: {
    pokemons: {},
    filters: {
      name: '',
      type_1: '',
      type_2: '',
      legendary: undefined,
    },
    selection: {},
  },
  mutations: {
    SET_POKEMONS(state, payload) {
      state.pokemons = payload;
    },
    ADD_POKEMON(state, payload) {
    },
    EDIT_POKEMON(/* payload */) {
      // TODO: Update pokemons obj
    },
    REMOVE_POKEMON(state, payload) {
    },
    REWARD_POKEMON(/* payload */) {
      // TODO: Update pokemons obj
    },
    SET_SELECTION(/* payload */) {
      // TODO: Update selection
    },
    SET_FILTER(state, payload) {
      state.filters[payload.filter] = payload.value;
    },
  },
  actions: {
    async getAll({ state, commit, rootState }) {
      state.filters.trainer = rootState.auth.me.id;
      const { data } = await PokemonRepository.getAll(state.filters);
      await commit('SET_POKEMONS', data);
    },
    async getNext({ state, commit }) {
      const { data } = await Raw(state.pokemons.next);
      await commit('SET_POKEMONS', data);
    },
    async getOne({ commit }, payload) {
      const { data } = await PokemonRepository.getOne(payload);
      await commit('SET_SELECTION', data);
    },
    async add({ commit }, payload) {
      const { data } = await PokemonRepository.add(payload);
    },
    async edit({ commit }, payload) {
      const { data } = await PokemonRepository.edit(payload);
      await commit('EDIT_POKEMON', data);
    },
    async remove({ commit, dispatch }, payload) {
      await PokemonRepository.remove(payload);
      await commit('REMOVE_POKEMON', payload);
      await dispatch('getAll');
    },
    async reward({ dispatch }, payload) {
      await PokemonRepository.reward(payload.id, payload.value);
      await dispatch('getAll');
    },
    async setFilter({ commit }, payload) {
      await commit('SET_FILTER', payload);
    },
  },
};
