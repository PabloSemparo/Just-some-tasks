function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i + 1) !== str.charCodeAt(i) + 1) {
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }

  return undefined;
}

console.log(fearNotLetter("abce")); 
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

/*
Как это работает
1. for перебирает все буквы строки, кроме последней.
2. charCodeAt() получает числовой код символа.
3. Проверяем, что код следующей буквы на единицу больше предыдущего.
4. Если разница больше единицы, значит, между буквами есть пропуск.
5. String.fromCharCode() преобразует найденный числовой код обратно в букву.
6. Если пропусков нет, возвращаем undefined.
