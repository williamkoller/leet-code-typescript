function reverse(x: number): number {
  const reversed = parseInt(Math.abs(x).toString().split("").reverse().join(""));

  if (reversed > 2 ** 31) return 0;
  return reversed * Math.sign(x);
}

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
console.log(reverse(0))