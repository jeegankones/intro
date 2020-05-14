import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dev-intro.netlify.app/'
});

export const withoutLoaderConfig = { withoutLoader: true };

export default axiosInstance;
