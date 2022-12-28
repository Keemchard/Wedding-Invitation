export type ButtonType = {
  label: string;
  bgColor?: string;
  txtColor?: string;
  btnRadius?: string;
  width?: string;
  height?: string;
  btnFunction?: () => unknown | void;
  icon?: string;
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
