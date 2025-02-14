function mergeAlternately(word1: string, word2: string): string {
  let result = '';
  const length = Math.max(word1.length, word2.length);
  for (let i = 0; i < length; i++) {
    if (i < word1.length) {
      result += word1[i];
    }
    if (i < word2.length) {
      result += word2[i];
    }
  }
  return result;
}

console.log(mergeAlternately('abc', 'pqr')) // apbqcr
console.log(mergeAlternately('ab', 'pqrs')) // apbqrs
console.log(mergeAlternately('abcd', 'pq')) // apbqcd
console.log(mergeAlternately('ab', 'p')) // apb
