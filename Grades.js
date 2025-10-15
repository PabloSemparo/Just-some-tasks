function getAverage(scores) {
  if (!scores || scores.length === 0) return 0;
  
  const sum = scores.reduce((total, score) => total + score, 0);
  return sum / scores.length;
}

function getGrade(score) {
  if (typeof score !== 'number' || score < 0 || score > 100) {
    throw new Error('Score must be a number between 0 and 100');
  }
  
  if (score === 100) return "A++";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
  try {
    const average = getAverage(totalScores);
    const grade = getGrade(studentScore);
    const status = hasPassingGrade(studentScore) ? "passed" : "failed";
    
    return `Class average: ${average.toFixed(1)}. Your grade: ${grade}. You ${status} the course.`;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

// Пример использования
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

// "Class average: 71.7. Your grade: F. You failed the course."
