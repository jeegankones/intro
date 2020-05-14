import axios from 'axios';

const baseUrl = 'https://intro-env-edge.eba-6z5r73tg.us-east-2.elasticbeanstalk.com/intro';

const axiosInstance = axios.create();

export const withoutLoaderConfig = { withoutLoader: true };

export default axiosInstance;
