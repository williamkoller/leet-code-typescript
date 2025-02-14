function increasingTriplet(nums: number[]): boolean {
  let first = Infinity,
    second = Infinity;

  for (const num of nums) {
    if (num <= first) {
      first = num; // Atualiza o menor número encontrado
    } else if (num <= second) {
      second = num; // Atualiza o segundo menor número encontrado
    } else {
      return true; // Encontramos um terceiro número maior que os dois anteriores
    }
  }

  return false;
}

console.log(increasingTriplet([1, 2, 3, 4])); // true
console.log(increasingTriplet([5, 4, 3, 2, 1])); // false
console.log(increasingTriplet([2, 1, 5, 0, 4, 6])); // true
