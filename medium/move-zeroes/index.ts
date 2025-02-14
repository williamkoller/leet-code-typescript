/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let i = 0;
  let j = 0;

  while (i < nums.length) {
    if (nums[i] !== 0) {
      nums[j++] = nums[i];
    }

    i++;
  }

  while (j < nums.length) {
    nums[j++] = 0;
  }
}

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
console.log(moveZeroes([0])) // [0]
