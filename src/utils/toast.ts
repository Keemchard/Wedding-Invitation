import { Theme, toast } from "react-toastify";

type ToastNotif = {
  message?: string;
  position?: string;
  autoClose?: number;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  progress?: undefined;
  theme_color?: Theme | undefined;
};

export const toast_notif = ({
  message,
  theme_color,
  hideProgressBar = false,
  autoClose = 5000,
}: ToastNotif) => {
  toast(message, {
    position: "bottom-left",
    autoClose: autoClose,
    hideProgressBar: hideProgressBar,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: theme_color,
  });
};
