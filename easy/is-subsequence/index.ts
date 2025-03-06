function isSubsequence(s: string, t: string): boolean {
  let sIndex = 0;
  let tIndex = 0;

  while (tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      sIndex++;
    }
    if (sIndex === s.length) {
      return true;
    }
    tIndex++;
  }

  return sIndex === s.length;
}

console.log(isSubsequence('abc', 'ahbgdc'));
console.log(isSubsequence('axc', 'ahbgdc'));
