import Repository from '@/store/repositories/factory.js';

const Raw = Repository.get('raw');
const PokedexRepository = Repository.get('pokedex');

export default {
  namespaced: true,
  state: {
    pokedex: {},
    selection: {},
  },
  mutations: {
    SET_POKEDEX(/* payload */) {
      // TODO: Update pokedex obj
    },
    SET_SELECTION(/* payload */) {
      // TODO: Update selection
    },
  },
  actions: {
    async getAll({ commit }) {
      const { data } = await PokedexRepository.getAll();
      await commit('SET_POKEDEX', data);
    },
    async getNext({ state, commit }) {
      const { data } = await Raw(state.pokedex.next);
      await commit('SET_POKEDEX', data);
    },
    async getOne({ commit }, payload) {
      const { data } = await PokedexRepository.getOne(payload);
      await commit('SET_SELECTION', data);
    },
  },
};
