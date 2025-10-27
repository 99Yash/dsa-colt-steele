//write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

function same(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) return false;
  //* instead of looping 2x, make 2 counters

  const freq1: Record<number, number> = {};
  const freq2: Record<number, number> = {};
  for (const num of arr1) {
    freq1[num] = (freq1[num] ?? 0) + 1;
  }
  for (const num of arr2) {
    freq2[num] = (freq2[num] ?? 0) + 1;
  }
  for (const num of arr1) {
    if (!(num ** 2 in freq2) || freq1[num] !== freq2[num ** 2]) return false;
  }
  return true;
}

console.log(same([1, 2, 3], [1, 3, 4]));
console.log(same([1, 2, 3, 2], [1, 9, 4, 4]));
console.log(same([1, 2, 3], [1, 4, 9]));
