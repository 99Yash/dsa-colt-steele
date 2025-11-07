/**
 * MERGE SORT - Divide and Conquer Algorithm
 *
 * How it works:
 * 1. Divide the unsorted array into two halves recursively
 * 2. Continue dividing until each subarray has 1 or 0 elements (base case)
 * 3. Merge the sorted subarrays back together using the merge function
 * 4. The merge function compares elements from both arrays and builds a sorted result
 *
 * Time Complexity: O(n log n) - always, even in worst case
 * Space Complexity: O(n) - requires additional space for merging
 * Stable: Yes
 *
 * Advantages: Predictable performance, good for large datasets, stable
 * Disadvantages: Uses extra space, slower for small arrays
 *
 * The merge function combines two sorted arrays into one sorted array.
 */
function merge(
  arr1: number[],
  arr2: number[],
  compareFn: (a: number, b: number) => number
) {
  //both are sorted

  const res = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (compareFn(arr1[i]!, arr2[j]!) < 0) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }

  return res;
}

function mergeSort(
  arr: number[],
  comparatorFn?: (a: number, b: number) => number
) {
  if (arr.length <= 1) return arr;

  function defaultComparator(a: number, b: number) {
    return a - b;
  }

  if (typeof comparatorFn !== 'function') {
    comparatorFn = defaultComparator;
  }

  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid)) as number[];
  const right = mergeSort(arr.slice(mid)) as number[];

  return merge(left, right, comparatorFn);
}
