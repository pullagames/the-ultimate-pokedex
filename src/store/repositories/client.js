import Axios from 'axios';

const baseURL = process.env.VUE_APP_API_ROOT_URL;

export default Axios.create({
  baseURL,
  headers: {
    // TODO: SET Bearer Token.
  },
});
