//Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.

// TODO: try again. this was almost done
function findPair(arr: number[], n: number) {
  if (arr.length === 0 && n === 0) return false;
  const newArr = arr.sort((a, b) => a - b);

  let left = 0;
  let right = 1;

  while (right < arr.length && left < arr.length) {
    if (
      right !== left &&
      Math.abs(newArr[right]! - newArr[left]!) === Math.abs(n)
    )
      return true;
    else if (newArr[right]! - newArr[left]! > n) left++;
    else right++;
  }
  return false;
}

console.log(
  findPair([6, 1, 4, 10, 2, 4], 2), // true
  findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1), // true
  findPair([4, -2, 3, 10], -6), // true
  findPair([6, 1, 4, 10, 2, 4], 22), // false
  findPair([], 0), // false
  findPair([5, 5], 0), // true
  findPair([-4, 4], -8), // true
  findPair([-4, 4], 8), // true
  findPair([1, 3, 4, 6], -2), // true
  findPair([0, 1, 3, 4, 6], -2), // true
  findPair([1, 2, 3], 0)
); // false)
