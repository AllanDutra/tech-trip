import axios from "axios";
import { errorInterceptor, responseInterceptor } from "./interceptors";
import { Environment } from "../../../environment";

const TechTripApi = axios.create({
  baseURL: Environment.URL_BASE,
});

TechTripApi.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);

export { TechTripApi };
