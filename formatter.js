function formatString(template, values) {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return key in values ? values[key] : match;
  });
}

// Пример использования
const message = "Привет, {name}! Тебе {age} лет.";
const result = formatString(message, {
  name: "Алекс",
  age: 25
});

console.log(result);
