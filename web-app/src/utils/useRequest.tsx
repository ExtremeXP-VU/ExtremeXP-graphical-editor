import { useState, useRef } from "react";
import axios, { AxiosRequestConfig } from "axios";

function useRequest<T>(
  options: AxiosRequestConfig = {
    url: "http://localhost",
    method: "GET",
    params: {},
    data: {},
  }
) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const controllerRef = useRef(new AbortController()); // AbortController is used to cancel the request

  const cancelRequest = () => {
    controllerRef.current.abort();
  };

  const request = (requestOptions?: AxiosRequestConfig) => {
    // Reset state
    setData(null);
    setError(null);
    setLoaded(false);

    return axios
      .request<T>({
        url: `${options.url}/${requestOptions?.url || ""}`,
        method: requestOptions?.method || options.method,
        signal: controllerRef.current.signal,
        params: requestOptions?.params || options.params,
        data: requestOptions?.data || options.data,
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
