import Client from '@/store/repositories/client.js';

const resource = '/pokedex';

export default {
  getAll(filters) {
    return Client.get(resource, { params: { ...filters } });
  },
  getNext(next, filters) {
    return Client.get(next, { params: { ...filters } });
  },
  getOne(id) {
    return Client.get(`${resource}/${id}`);
  },
};
