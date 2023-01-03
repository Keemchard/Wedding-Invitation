import { Theme, toast } from "react-toastify";

type ToastNotif = {
  message: string;
  theme_color: Theme | undefined;
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
