/**
 * INSERTION SORT
 *
 * How it works:
 * 1. Start with the second element (index 1) - consider first element as sorted
 * 2. For each element, compare it with elements before it
 * 3. Shift larger elements to the right to make space
 * 4. Insert the current element in its correct position in the sorted portion
 * 5. Repeat until all elements are in their correct positions
 *
 * Time Complexity: O(n²) worst/average case, O(n) best case (nearly sorted)
 * Space Complexity: O(1) - in-place sorting
 * Stable: Yes
 * Adaptive: Yes - performs well on nearly sorted data
 *
 * Analogy: Like sorting playing cards in your hand - pick each card and insert it
 * in the correct position among the cards you're already holding.
 */
function insertionSort(
  arr: number[],
  compareFn?: (s: number, t: number) => number
) {
  if (arr.length === 0 || arr.length === 1) return arr;

  function defaultComparator(a: number, b: number) {
    return a - b;
  }

  if (typeof compareFn !== 'function') {
    compareFn = defaultComparator;
  }

  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;

    while (j >= 0 && compareFn(current!, arr[j]!) < 0) {
      arr[j + 1] = arr[j] as number;
      j--;
    }

    arr[j + 1] = current as number;
  }
}
