import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://intro-env-edge.eba-6z5r73tg.us-east-2.elasticbeanstalk.com/intro'
});

export const withoutLoaderConfig = { withoutLoader: true };

export default axiosInstance;
