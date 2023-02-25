const convertTo12Hour = (timeStr: string): string => {
  const [hoursStr, minutesStr] = timeStr.split(":");
  const hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);

  const suffix = hours >= 12 ? "PM" : "AM";

  const hours12 = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;

  return `${hours12}:${minutes.toString().padStart(2, "0")} ${suffix}`;
};

export default convertTo12Hour;
