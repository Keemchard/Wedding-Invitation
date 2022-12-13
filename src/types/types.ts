export type ButtonType = {
  label: string;
  bgColor?: string;
  txtColor?: string;
  btnFunction: () => unknown | void;
};

export type Timeline = {
  time: string;
  title: string;
  description: string;
};
