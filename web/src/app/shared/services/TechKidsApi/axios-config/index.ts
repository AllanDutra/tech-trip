import axios from "axios";
import { errorInterceptor, responseInterceptor } from "./interceptors";
import { Environment } from "../../../environment";

const TechKidsApi = axios.create({
  baseURL: Environment.URL_BASE,
});

TechKidsApi.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);

export { TechKidsApi };
