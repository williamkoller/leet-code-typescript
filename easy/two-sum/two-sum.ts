function twoSum(nums: number[], target: number): number[] {
  const numMap = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]

    if (numMap.has(complement)) {
      return [numMap.get(complement)!, i]
    }

    numMap.set(nums[i], i)
  }

  throw new Error('No two sum solution')
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))