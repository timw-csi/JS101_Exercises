function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    return (string2 + string1 + string2);
  } else {
    return (string1 + string2 + string1);
  }
}

console.log(shortLongShort('yo', 'abcde'));
console.log(shortLongShort('', 'abcdefg'));
console.log(shortLongShort('abc', 'defgh'));