import PokedexRepository from '@/store/repositories/pokedexRepository.js';

const repositories = {
  pokedex: PokedexRepository,
};
export default {
  get: (name) => repositories[name],
};
