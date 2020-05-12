import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { hasIn } from 'lodash';
import axiosInstance from '../../axiosApi';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const useAxiosLoader = () => {
  const [counter, setCounter] = useState(0);

  const loaderDisabled = (config = {}) => !!(hasIn(config, 'withoutLoader') && config.withoutLoader);

  const inc = useCallback(() => setCounter((currentCount) => currentCount + 1), [
    setCounter
  ]);
  const dec = useCallback(() => setCounter((currentCount) => currentCount - 1), [
    setCounter
  ]);

  const interceptors = useMemo(
    () => ({
      request: (config) => {
        if (!loaderDisabled(config)) {
          inc();
        }
        return config;
      },
      response: (response) => {
        if (!loaderDisabled(response.config)) {
          dec();
        }
        return response;
      },
      error: (error) => {
        if (!loaderDisabled(error.config)) {
          dec();
        }
        return Promise.reject(error);
      }
    }),
    [inc, dec]
  );

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(interceptors.request, interceptors.error);
    const responseInterceptor = axiosInstance.interceptors.response.use(interceptors.response, interceptors.error);

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [interceptors]);

  return [counter > 0];
};

const GlobalLoader = () => {
  const [loading] = useAxiosLoader();
  return loading ? <LoadingSpinner /> : null;
};

export default GlobalLoader;
