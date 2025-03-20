export const getToday = () => {
  const now = new Date();

  // 현재 시간을 UTC 기준으로 변환
  const utcNow = now.getTime() + now.getTimezoneOffset() * 60000;

  // UTC 기준에서 한국 시간(KST, UTC+9)으로 변환
  const kstNow = new Date(utcNow + 9 * 60 * 60000);

  // 한국 시간(KST)에서 오전 9시 이전이면 하루 전 날짜 반환
  if (kstNow.getHours() < 9) {
    kstNow.setDate(kstNow.getDate() - 1);
  }

  return kstNow.toISOString().split("T")[0]; // YYYY-MM-DD 형식 반환
};
