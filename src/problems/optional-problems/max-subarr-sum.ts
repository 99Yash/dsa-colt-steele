//Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

//Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

function maxSubarraySum(arr: number[], n: number): number | null {
  if (n > arr.length) return null;

  let i = 0;
  let j = n - 1;

  let tempSum: number | null = null;

  while (j <= arr.length && j - i === n - 1) {
    //find the elements of the array

    const s = arr.slice(i, j + 1); // WHY j+1 and not j: end (optional): The index BEFORE WHICH to end extraction (the element at this index will not be included). If omitted, the slice extends to the end of the array. Negative indices count from the end of the array.

    const sum = s.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    if (tempSum === null) tempSum = sum;
    else {
      tempSum = Math.max(tempSum, sum);
    }

    i++;
    j++;
  }
  return tempSum;
}

console.log(
  maxSubarraySum([100, 200, 300, 400], 2), // 700
  maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4), // 39
  maxSubarraySum([-3, 4, 0, -2, 6, -1], 2), // 5
  maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2), // 5
  maxSubarraySum([2, 3], 3)
); // null
