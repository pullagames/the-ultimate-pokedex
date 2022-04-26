import Client from '@/store/repositories/client.js';

const resource = '/pokemon';

export default {
  getAll(filters) {
    return Client.get(resource, { params: { ...filters } });
  },
  getOne(id) {
    return Client.get(`${resource}/${id}`);
  },
  add(payload) {
    return Client.post(`${resource}/`, payload);
  },
  edit(id) {
    return Client.patch(`${resource}/${id}`);
  },
  reward(id, payload) {
    return Client.post(`${resource}/${id}/give_xp/`, { amount: payload });
  },
  remove(id) {
    return Client.delete(`${resource}/${id}`);
  },
};
