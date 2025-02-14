function reverse(x: number): number {
  let reversed = 0;
  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return reversed;
}

function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  return x === reverse(x);
}


console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
console.log(isPalindrome(-101)); // false
console.log(isPalindrome(0)); // true