function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const totalLength = nums1.length + nums2.length;
  const isEven = totalLength % 2 === 0;
  const midIndex = Math.floor(totalLength / 2);
  let i = 0;
  let j = 0;
  let current = 0;
  let prev = 0;

  while (i + j <= midIndex) {
    prev = current;
    if (nums1[i] < nums2[j] || j >= nums2.length) {
      current = nums1[i];
      i++;
    } else {
      current = nums2[j];
      j++;
    }
  }

  return isEven ? (prev + current) / 2 : current;
}

console.log(findMedianSortedArrays([1, 3], [2])); // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5