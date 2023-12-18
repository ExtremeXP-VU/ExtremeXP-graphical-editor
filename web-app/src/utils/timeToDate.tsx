export function timestampToDate(timestamp: number) {
  const date = new Date(timestamp * 1000);
  const currentDate = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // Check if the date is today
  if (
    date.getDate() === currentDate.getDate() &&
    date.getMonth() === currentDate.getMonth() &&
    date.getFullYear() === currentDate.getFullYear()
  ) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${hours}:${minutes}:${seconds}`;
  } else {
    return `${day}-${month}-${year}`;
  }
}

export function timeNow() {
  return Math.floor(Date.now() / 1000);
}
