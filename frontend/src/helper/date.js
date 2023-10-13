const date = new Date();
export function dateOutDisplay(item) {
  const day = date.getDate(item.out.date);
  const month = date.getMonth(item.out.date) + 1;
  const year = date.getFullYear(item.out.date);
  const fullDateOut = day + '/' + month + '/' + year;
  return fullDateOut;
}
export function dateInDisplay(item) {
  const day = date.getDate(item.in.date);
  const month = date.getMonth(item.in.date) + 1;
  const year = date.getFullYear(item.in.date);
  const fullDateIn = day + '/' + month + '/' + year;
  return fullDateIn;
}
