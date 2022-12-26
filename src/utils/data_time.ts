const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const date_time = new Date();

export const DAY = days[date_time.getDay()];
export const DAY_IN_NUMBER = date_time.getDate();
export const MONTH = months[date_time.getMonth()];
export const YEAR = date_time.getFullYear();
const hours = date_time.getHours();
const minutes = date_time.getMinutes();
const seconds = date_time.getSeconds();
export const TIME = `${hours}:${minutes}:${seconds}`;
