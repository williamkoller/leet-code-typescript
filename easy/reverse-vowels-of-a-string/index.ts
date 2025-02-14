function reverseVowels(s: string): string {
    const vowels = 'aeiouAEIOU';
    const sArr = s.split('');
    let left = 0;
    let right = sArr.length - 1;
    while (left < right) {
        if (vowels.includes(sArr[left]) && vowels.includes(sArr[right])) {
            [sArr[left], sArr[right]] = [sArr[right], sArr[left]];
            left++;
            right--;
        } else if (!vowels.includes(sArr[left])) {
            left++;
        } else {
            right--;
        }
    }
    return sArr.join('');
}

console.log(reverseVowels('IceCreAm'))