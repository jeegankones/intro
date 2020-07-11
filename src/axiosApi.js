import axios from 'axios';

const axiosInstance = () => {
  const defaultOptions = {
    baseURL: process.env.REACT_APP_API_PATH,
    headers: {
      'Authorization': ''
    }
  }

  return axios.create(defaultOptions);
}

export const withoutLoaderConfig = { withoutLoader: true };

export default axiosInstance();
