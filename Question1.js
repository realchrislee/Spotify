function sortByStrings(s, t) {
  let charsHash = {};
  let splitS = s.split('');
  let splitT = t.split('');
  let sorted = '';
  splitS.forEach(char => {
    if (char in charsHash) {
      charsHash[char]++;
    } else {
      charsHash[char] = 1;
    }
  });
  splitT.forEach(char => {
    for(let i = charsHash[char]; i > 0; i--) {
      sorted += char;
    }
  });

  return sorted;
}

