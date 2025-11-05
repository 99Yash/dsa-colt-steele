/*
ATTEMPT THIS IS YOU ARE UP FOR IT! Implement a function called bubbleSort. Given an array, bubbleSort will sort the values in the array. The function takes 2 parameters: an array and an optional comparator function.

function bubbleSort(arr, comparator) {
  if (typeof comparator !== 'function') {
    provide a default
  }
}
The comparator function is a callback that will take two values from the array to be compared. The function returns a negative value if the first value is less than the second, a positive value if the first value is greater than the second, and 0 if both values are equal.

The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.

Bubble sort is an O(n^2) algorithm. You can read more about it here: https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/basic-sorting-algorithms

Examples

bubbleSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
bubbleSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
bubbleSort([1, 2, 3]); // [1, 2, 3]
bubbleSort([]);
*/

function bubbleSort(
  arr: number[],
  compareFn?: ((a: number, b: number) => number) | undefined
) {
  if (arr.length === 0 || arr.length === 1) return arr;

  function defaultComparator(a: number, b: number) {
    return a - b;
  }

  if (typeof compareFn !== 'function') {
    compareFn = defaultComparator;
  }

  for (let x = 0; x < arr.length; x++) {
    let noSwaps = true;
    for (let i = 0; i < arr.length - x - 1; i++) {
      if (compareFn(arr[i]!, arr[i + 1]!) > 0) {
        //a-b  > 0 --> compare will be negative
        const temp = arr[i]!;
        arr[i] = arr[i + 1]!;
        arr[i + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
}
