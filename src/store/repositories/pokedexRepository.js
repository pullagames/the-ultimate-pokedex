import Client from '@/store/repositories/client.js';

const resource = '/pokedex';

export default {
  getAll() {
    return Client.get(resource);
  },
  getOne(id) {
    return Client.get(`${resource}/${id}`);
  },
};
