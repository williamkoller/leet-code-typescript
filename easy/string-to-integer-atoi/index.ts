function myAtoi(s: string): number {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);
  const sTrim = s.trim();
  let i = 0;
  let sign = 1;
  let result = 0;
  if (sTrim[i] === '+' || sTrim[i] === '-') {
    sign = sTrim[i] === '+' ? 1 : -1;
    i++;
  }
  while (i < sTrim.length) {
    const digit = sTrim.charCodeAt(i) - '0'.charCodeAt(0);
    if (digit < 0 || digit > 9) {
      break;
    }
    if (result > Math.floor((INT_MAX - digit) / 10)) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }
    result = result * 10 + digit;
    i++;
  }
  return result * sign;
}

console.log(myAtoi('42')) // 42
console.log(myAtoi('   -42')) // -42
console.log(myAtoi('4193 with words')) // 4193
console.log(myAtoi('words and 987')) // 0
console.log(myAtoi('-91283472332')) // -2147483648
console.log(myAtoi('3.14159')) // 3
console.log(myAtoi('+-12')) // 0