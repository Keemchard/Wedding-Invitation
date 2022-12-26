export type ButtonType = {
  label: string;
  bgColor?: string;
  txtColor?: string;
  btnFunction: () => unknown | void;
};

export type Timeline = {
  id?: number;
  time: string;
  title: string;
  description: string;
  box_position?: string;
};

export type Guest = {
  first_name?: string;
  last_name?: string;
  date?: string;
  time?: string;
};
