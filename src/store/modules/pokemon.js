import Repository from '@/store/repositories/factory.js';

const Raw = Repository.get('raw');
const PokemonRepository = Repository.get('pokemon');

export default {
  namespaced: true,
  state: {
    pokemons: {},
    selection: {},
  },
  mutations: {
    SET_POKEMONS(/* payload */) {
      // TODO: Update pokemons obj
    },
    ADD_POKEMON(/* payload */) {
      // TODO: Update pokemons obj
    },
    EDIT_POKEMON(/* payload */) {
      // TODO: Update pokemons obj
    },
    REMOVE_POKEMON(/* payload */) {
      // TODO: Update pokemons obj
    },
    REWARD_POKEMON(/* payload */) {
      // TODO: Update pokemons obj
    },
    SET_SELECTION(/* payload */) {
      // TODO: Update selection
    },
  },
  actions: {
    async getAll({ commit }) {
      const { data } = await PokemonRepository.getAll();
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
      await commit('ADD_POKEMON', data);
    },
    async edit({ commit }, payload) {
      const { data } = await PokemonRepository.edit(payload);
      await commit('EDIT_POKEMON', data);
    },
    async remove({ commit }, payload) {
      const { data } = await PokemonRepository.remove(payload);
      await commit('REMOVE_POKEMON', data);
    },
    async reward({ commit }, payload) {
      const { data } = await PokemonRepository.reward(payload);
      await commit('REWARD_POKEMON', data);
    },
  },
};
