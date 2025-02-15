function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
      flowerbed[i] = 1;
      count++;
    }
  }
  return count >= n;
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)) // true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)) // false
