import { useState, useRef } from "react";
import axios, { AxiosRequestConfig, Method } from "axios";

function useRequest<T>(
  url: string,
  method: Method,
  payload: AxiosRequestConfig
) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const controllerRef = useRef(new AbortController()); // AbortController is used to cancel the request

  const cancelRequest = () => {
    controllerRef.current.abort();
  };

  const request = () => {
    // Reset state
    setData(null);
    setError(null);
    setLoaded(false);

    // Make request
    return axios
      .request<T>({
        url,
        method,
        signal: controllerRef.current.signal,
        data: payload,
      })
      .then((response) => {
        setData(response.data);
        return response.data;
      })
      .catch((error) => {
        setError(error);
        throw error;
      })
      .finally(() => {
        setLoaded(true);
      });
  };

  return { data, error, loaded, request, cancelRequest };
}

export default useRequest;
