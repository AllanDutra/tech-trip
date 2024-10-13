import { Bounce, toast, ToastPosition } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

interface IToastProps {
  message: string;
  positionProp: ToastPosition;
}

export const ToastError = ({
  message,
  positionProp = "top-right",
}: IToastProps) => {
  return toast.error(message, {
    position: positionProp,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
};

export const ToastSuccess = ({
  message,
  positionProp = "top-right",
}: IToastProps) => {
  return toast.success(message, {
    position: positionProp,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
};

export const ToastWarning = ({
  message,
  positionProp = "top-right",
}: IToastProps) => {
  return toast.warning(message, {
    position: positionProp,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
};
