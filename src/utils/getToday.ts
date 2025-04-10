import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const getToday = () => {
  const now = dayjs().tz("Asia/Seoul");

  if (now.hour() < 9) {
    return now.subtract(1, "day").format("YYYY-MM-DD");
  }

  return now.format("YYYY-MM-DD");
};

export const getYesterday = () => {
  return dayjs(getToday()).subtract(1, "day").format("YYYY-MM-DD");
};
