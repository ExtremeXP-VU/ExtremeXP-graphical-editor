export function timestampToDate(timestamp: number) {
  const date = new Date(timestamp * 1000);
  console.log(date);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${day}-${month}-${year}`;
}
