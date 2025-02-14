function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;

  const rows: string[] = Array.from({ length: Math.min(numRows, s.length) }, () => "");
  let goingDown = false;
  let row = 0;

  for (const char of s) {
    rows[row] += char;
    if (row === 0 || row === numRows - 1) goingDown = !goingDown;
    row += goingDown ? 1 : -1;
  }

  return rows.join("");
}

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("A", 1));
console.log(convert("AB", 1));
