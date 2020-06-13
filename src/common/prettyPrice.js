export default function prettyPrice(price) {
  const separator = " ";
  return price
    .toString()
    .replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
}
