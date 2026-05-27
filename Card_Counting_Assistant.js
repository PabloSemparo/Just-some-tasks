let count = 0;

function cardCounter(card) {
  // увеличение счёта
  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
    count++;
  }
  // без изменений
  else if (card === 7 || card === 8 || card === 9) {
    count += 0;
  }
  // уменьшение счёта
  else {
    count--;
  }

  // решение
  const decision = count > 0 ? "Bet" : "Hold";

  return count + " " + decision;
}
