function prefix(words: string[]): string {
  if (!words[0] || words.length === 1) {
    return words[0] || '';
  }

  let i = 0;

  while (words[0][i] && words.every((word) => word[i] === words[0][i])) {
    i++;
  }

  return words[0].substring(0, i);
}

console.log(prefix(['flower', 'flow', 'flight']));
console.log(prefix(['dog', 'racecar', 'car']));
console.log(prefix(['abc']));
console.log(prefix(['abcdefgh', 'abcde', 'abe']));
console.log(prefix(['abc', 'abc', 'abc']));
console.log(prefix(['abc', 'abcde', 'xyz']));
