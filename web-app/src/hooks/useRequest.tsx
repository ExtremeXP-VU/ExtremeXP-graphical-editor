import { useState, useRef, useCallback, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";
import { useNavigate } from "react-router-dom";
import { message } from "../utils/message";

// default request config
const defaultRequestConfig = {
  url: "/",
  method: "GET",
  data: {},
  params: {},
};

function useRequest<T>(
  options: AxiosRequestConfig & { manual?: boolean } = defaultRequestConfig
) {
  const navigate = useNavigate();
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const controllerRef = useRef(new AbortController());

  const cancel = () => {
    controllerRef.current.abort();
  };

  const request = useCallback(
    (requestOptions: AxiosRequestConfig) => {
      // reset state
      setData(null);
      setError("");
      setLoaded(false);

      // get token from localStorage and set headers
      const loginToken = localStorage.getItem("token");
      const headers = loginToken
        ? {
            token: loginToken,
          }
        : {};

      // send request
      return axios
        .request<T>({
          baseURL: "http://localhost",
          url: requestOptions.url,
          method: requestOptions.method,
          signal: controllerRef.current.signal,
          data: requestOptions.data,
          params: requestOptions.params,
          headers,
        })
        .then((response) => {
          setData(response.data);
          return response.data;
        })
        .catch((error) => {
          if (error?.response?.status === 403) {
            localStorage.removeItem("token");
            navigate("/account/login");
          }
          setError(error.message || "unknown request error.");
          throw error;
        })
        .finally(() => {
          setLoaded(true);
        });
    },
    [navigate]
  );

  // useEffect(() => {
  //   if (!options.manual) {
  //     request(options).catch((e) => {
  //       message(e?.message);
  //     });
  //   }
  // }, [options, request]);

  return { data, error, loaded, request, cancel };
}

export default useRequest;
