function palindorme(str: string): boolean {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
}

console.log(palindorme('racecar'));
console.log(palindorme('hello'));
console.log(palindorme('radar'));
console.log(palindorme('level'));
console.log(palindorme('reviver'));
console.log(palindorme('palindrome'));
