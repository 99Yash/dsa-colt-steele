//Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

//TODO: try again
function countZeroes(arr: number[]) {
  if (arr[arr.length - 1] !== 0) return 0;
  if (arr[0] === 0) return arr.length;

  let i = 0;
  const prevI = 0;
  const j = arr.length - 1;

  while (i < j) {
    if (arr[i] !== 0) {
      i === 0
        ? (i = Math.round(arr.length / 2))
        : (i = Math.round((i + prevI) / 2));
    } else {
      i - Math.round((i + prevI) / 2);
    }
    return arr.slice(i, j + 1).length;
  }
}

console.log(
  countZeroes([1, 1, 1, 1, 0, 0]), // 2
  countZeroes([1, 0, 0, 0, 0]), // 4
  countZeroes([0, 0, 0]), // 3
  countZeroes([1, 1, 1, 1])
); // 0
