function reverseWords(s: string): string {
  return s.split(' ').reverse().join(' ').replace(/\s+/g, ' ').trim();
}

console.log(reverseWords('the sky is blue')); // 'blue is sky the'
console.log(reverseWords('  hello world  ')); // 'world hello'
console.log(reverseWords('a good   example')); // 'example good a'