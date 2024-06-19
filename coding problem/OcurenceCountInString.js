function coutnCharacters(str) {
  const charCount = {};
  const len = str.length;
  for (let i = 0; i < len; i++) {
    const char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }
  console.log(charCount);
}

coutnCharacters('wwwwww');

// Time complexity : O(N)
