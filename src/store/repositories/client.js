import Axios from 'axios';
import CreateAuthRefreshInterceptor from 'axios-auth-refresh';

import storage from '@/utils/storage.js';
import store from '@/store/index.js';

const baseURL = process.env.VUE_APP_API_ROOT_URL;

const refresh = (failedRequest) => {
  store.dispatch('loader/setStatus', 0);
  if (failedRequest.response?.data?.code === 'token_not_valid') {
    Axios.post(`${baseURL}/api/token/refresh/`, { refresh: storage.getItem('refresh') }).then((response) => {
      storage.setItem('access', response.data.access);
      return Promise.resolve();
    });
  }
};

CreateAuthRefreshInterceptor(Axios, refresh);

const token = () => storage.getItem('access');

Axios.interceptors.request.use((request) => {
  store.dispatch('loader/setStatus', 1);
  request.baseURL = baseURL;
  request.headers.Authorization = `Bearer ${token()}`;
  return request;
});

Axios.interceptors.response.use((response) => {
  store.dispatch('loader/setStatus', 0);

  return response;
});

export default Axios;
