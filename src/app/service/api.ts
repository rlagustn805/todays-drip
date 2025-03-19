export async function getTodayPhoto() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/photo`);

  if (!res.ok) {
    return null;
  }

  return res.json();
}
