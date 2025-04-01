import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/ko";

// 플러그인 확장
dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);

// 언어 설정
dayjs.locale("ko"); // 한국어로 '몇 분 전'
dayjs.tz.setDefault("Asia/Seoul"); // 타임존 KST

export default dayjs;
