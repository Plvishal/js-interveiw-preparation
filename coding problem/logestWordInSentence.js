const findLogestWord = (sentance) => {
  let wordArray = sentance.trim().split(' ');
  let logetsWord = '';
  for (let i = 0; i < wordArray.length; i++) {
    console.log([wordArray[i]]);
    if (wordArray[i].length > logetsWord.length) {
      logetsWord = wordArray[i];
    }
  }
  return logetsWord;
};

console.log(findLogestWord(' vishal pal kumarji'));
