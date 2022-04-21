import AuthRepository from '@/store/repositories/authRepository.js';
import PokedexRepository from '@/store/repositories/pokedexRepository.js';
import PokemonRepository from '@/store/repositories/pokemonRepository.js';

const repositories = {
  auth: AuthRepository,
  pokedex: PokedexRepository,
  pokemon: PokemonRepository,
};
export default {
  get: (name) => repositories[name],
};
