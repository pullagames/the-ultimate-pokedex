import Client from '@/store/repositories/client.js';

export default {
  register(payload) {
    return Client.post('/api/users/register', payload);
  },
  getAuthToken(payload) {
    return Client.post('/api/token', payload);
  },
  refreshToken(payload) {
    return Client.post('/api/token/refresh', payload);
  },
  getMe() {
    return Client.get('/api/users/me');
  },
};
