function getGrades(num1, num2, num3) {
  let average = ((num1 + num2 + num3) / 3);
  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >= 80 && average <= 90) {
    return 'B';
  } else if (average >= 70 && average <= 80) {
    return 'C';
  } else if (average >= 60 && average <= 70) {
    return 'D';
  } else return 'F';
}

console.log(getGrades(95, 90, 93));    // "A"
console.log(getGrades(50, 50, 95));    // "D"