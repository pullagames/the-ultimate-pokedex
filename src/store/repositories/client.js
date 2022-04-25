import Axios from 'axios';
import CreateAuthRefreshInterceptor from 'axios-auth-refresh';

import storage from '@/utils/storage.js';

const baseURL = process.env.VUE_APP_API_ROOT_URL;

const refresh = (failedRequest) => {
  if (failedRequest.response?.data?.code === 'token_not_valid') {
    Axios.post(`${baseURL}/api/token/refresh/`, { refresh: storage.getItem('refresh') }).then((response) => {
      storage.setItem('access', response.data.access);
      return Promise.resolve();
    });
  }
};

const token = () => storage.getItem('access');

Axios.interceptors.request.use((request) => {
  request.baseURL = baseURL;
  request.headers.Authorization = `Bearer ${token()}`;
  return request;
});

export default Axios;
