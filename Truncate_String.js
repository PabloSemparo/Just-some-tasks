//Классическая функция
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
//Версия с тернарным оператором
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
