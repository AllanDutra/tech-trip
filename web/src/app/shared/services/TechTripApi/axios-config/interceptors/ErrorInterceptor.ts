import { AxiosError } from "axios";
import { toast } from "react-toastify";

interface IApiMessage {
  message: string;
}

const isApiMessage = (error: any): error is IApiMessage => {
  if (!error) return false;

  return "message" in error;
};

export const errorInterceptor = (error: AxiosError) => {
  if (error.message === "Network Error") {
    return Promise.reject(new Error("Erro de conexão"));
  }

  if (error.response?.status !== 401) {
    if (error.response?.data && isApiMessage(error)) {
      toast.error(error.message);
    }
  }

  return Promise.reject(error);
};
