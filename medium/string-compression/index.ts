function compress(chars: string[]): number {
  let i = 0;
  let j = 0;

  while (i < chars.length) {
    let count = 0;
    const char = chars[i];

    while (i < chars.length && chars[i] === char) {
      i++;
      count++;
    }

    chars[j++] = char;

    if (count > 1) {
      for (const digit of count.toString()) {
        chars[j++] = digit;
      }
    }
  }

  return j;
}

console.log(compress(["a", "a", "b", "b", "c", "c", "c"])); // 6
console.log(compress(["a"])); // 1