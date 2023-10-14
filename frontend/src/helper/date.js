const date = new Date();
export function dateOutDisplay() {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const fullDateOut = day + '/' + month + '/' + year;
  return fullDateOut;
}
export function dateInDisplay() {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const fullDateIn = day + '/' + month + '/' + year;
  return fullDateIn;
}
