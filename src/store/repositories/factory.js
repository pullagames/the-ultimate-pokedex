import Client from '@/store/repositories/client.js';

import AuthRepository from '@/store/repositories/authRepository.js';
import PokedexRepository from '@/store/repositories/pokedexRepository.js';
import PokemonRepository from '@/store/repositories/pokemonRepository.js';

const raw = (url, params) => Client.get(url, params);

const repositories = {
  raw,
  auth: AuthRepository,
  pokedex: PokedexRepository,
  pokemon: PokemonRepository,
};
export default {
  get: (name) => repositories[name],
};
