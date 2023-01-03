import { Theme, toast } from "react-toastify";

type ToastNotif = {
  message?: string;
  position?: string;
  autoClose?: 5000;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  progress?: undefined;
  theme_color?: Theme | undefined;
};

export const toast_notif = ({ message, theme_color }: ToastNotif) => {
  toast(message, {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: theme_color,
  });
};

//disregard this codes below onwards, (that was just a practice/testing)
type Toasted_bread = {
  position?: string;
  autoClose?: 5000;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  progress?: undefined;
  theme_color?: Theme | undefined;
  message?: string;
};

export const toasted_bread = (prop: Toasted_bread) => {
  const { message } = prop;
  toast(message, {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const myFunct = (lol: any) => {
  return lol;
};

const People = {
  name: "KC",
  age: 2,
};

export const a = myFunct(People);
