//Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

//This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

//TODO: try again
function minSubArrayLen(arr: number[], n: number) {
  const isExist = arr[arr.findIndex((num, i) => num >= n)];

  if (isExist) return 1;

  // const newArr = arr.sort((a, b) => b - a); //descending order - can't do it. changes the order

  const i = 0;
  let j = 0;

  while (j < arr.length) {
    const tempArr = arr.slice(i, j + 1);

    const sum = tempArr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    if (sum < n) {
      j++;
    } else if (sum > n) {
    }
  }

  return 0;
}

console.log(
  minSubArrayLen([2, 3, 1, 2, 4, 3], 7), // 2 -> because [4,3] is the smallest subarray
  minSubArrayLen([2, 1, 6, 5, 4], 9), // 2 -> because [5,4] is the smallest subarray
  minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52), // 1 -> because [62] is greater than 52
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39), // 3
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55), // 5
  minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11), // 2
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)
); // 0
