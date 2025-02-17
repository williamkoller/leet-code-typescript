function twoSum(nums: number[], target: number): number[] {
  let numMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.has(complement)) {
      return [numMap.get(complement)!, i];
    }

    numMap.set(nums[i], i);
  }

  throw new Error('No two sum solution');
}

console.log('OUTPUT', twoSum([2, 11, 15, 7], 9));
console.log('OUTPUT', twoSum([3, 2, 4], 6));
console.log('OUTPUT', twoSum([3, 3], 6));
console.log('OUTPUT', twoSum([10, 3, 13, 1], 13));
