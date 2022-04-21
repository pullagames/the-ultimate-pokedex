import Client from '@/store/repositories/client.js';

const resource = '/pokemon';

export default {
  getAll() {
    return Client.get(resource);
  },
  getOne(id) {
    return Client.get(`${resource}/${id}`);
  },
  add(id, payload) {
    return Client.post(`${resource}/${id}`, payload);
  },
  edit(id) {
    return Client.patch(`${resource}/${id}`);
  },
  reward(id, payload) {
    return Client.post(`${resource}/${id}/give_xp`, payload);
  },
  remove(id) {
    return Client.delete(`${resource}/${id}`);
  },
};
