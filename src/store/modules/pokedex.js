import Repository from '@/store/repositories/factory.js';

const Raw = Repository.get('raw');
const PokedexRepository = Repository.get('pokedex');

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
    SET_POKEDEX(state, payload) {
      state.pokemons = payload;
    },
    ADD_TO_POKEDEX(state, payload) {
      state.pokemons.results.push(...payload.results);
      state.pokemons.next = payload.next;
    },
    SET_FILTER(state, payload) {
      state.filters[payload.filter] = payload.value;
    },
    SET_SELECTION(state, payload) {
      state.selection = payload;
    },
  },
  actions: {
    async getAll({ state, commit }) {
      const { data } = await PokedexRepository.getAll(state.filters);
      await commit('SET_POKEDEX', data);
    },
    async getNext({ state, commit }) {
      if (state.pokemons.next) {
        const { data } = await PokedexRepository.getNext(state.pokemons.next, state.filters);
        await commit('ADD_TO_POKEDEX', data);
      }
    },
    async getOne({ commit }, payload) {
      const { data } = await PokedexRepository.getOne(payload);
      await commit('SET_SELECTION', data);
    },
    async setFilter({ commit }, payload) {
      await commit('SET_FILTER', payload);
    },
  },
};
