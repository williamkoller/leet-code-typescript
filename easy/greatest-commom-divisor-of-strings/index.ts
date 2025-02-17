function greatCommomDivisor(a: number, b: number): number {
  return b === 0 ? a : greatCommomDivisor(b, a % b);
}

function greatestCommomDivisorOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) {
    return '';
  }
  const gcdLength = greatCommomDivisor(str1.length, str2.length);
  return str1.substring(0, gcdLength);
}

console.log(greatestCommomDivisorOfStrings('ABCABC', 'ABC')); // ABC
console.log(greatestCommomDivisorOfStrings('ABABAB', 'ABAB')); // AB
console.log(greatestCommomDivisorOfStrings('ABABAB', 'ABABAB')); // ABABAB
