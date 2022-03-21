function wordSizes(sentence) {
  let wordObject = {};
  let wordArray = sentence.split(' ');

  wordArray.forEach(word => {
    if (word.length === 0) return 0;
    else if (wordObject[word.length]) {
      wordObject[word.length] += 1;
    } else wordObject[word.length] = 1;
  });

  return wordObject;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}