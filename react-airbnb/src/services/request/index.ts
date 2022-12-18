import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

class iceRequest {
  instance: AxiosInstance;
  constructor(baseURL: string, timeout: number) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
  }

  request(config: AxiosRequestConfig) {
    return this.instance.request(config);
  }

  post(config: AxiosRequestConfig, data?: any) {
    return this.instance.request({
      ...config,
      method: "post",
      data,
    });
  }

  get(config: AxiosRequestConfig, params?: any) {
    return this.instance.request({
      ...config,
      params,
    });
  }
}

const request = new iceRequest(process.env.REACT_APP_API_URL as string, 10000);

export default request;
