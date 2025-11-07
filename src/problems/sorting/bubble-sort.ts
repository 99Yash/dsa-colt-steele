/**
 * BUBBLE SORT - Advanced Implementation with Custom Comparator
 *
 * How it works:
 * 1. Compare adjacent elements in the array using a comparator function
 * 2. Swap them if comparator indicates they're in the wrong order
 * 3. Repeat for each pair in the array (larger elements "bubble up")
 * 4. After each pass, the largest element is in its correct position
 * 5. Repeat the process for the remaining unsorted portion
 *
 * Time Complexity: O(n²) - nested loops
 * Space Complexity: O(1) - in-place sorting
 * Stable: Yes
 *
 * Features:
 * - Accepts custom comparator function for flexible sorting
 * - Default comparator sorts numbers ascending
 * - Early termination optimization if no swaps occur
 *
 * Comparator function: returns negative if a < b, positive if a > b, 0 if equal
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
