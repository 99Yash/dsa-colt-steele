/**
 * SELECTION SORT
 *
 * How it works:
 * 1. Find the minimum element in the unsorted portion of the array
 * 2. Swap it with the first element of the unsorted portion
 * 3. Move the boundary between sorted and unsorted portions one element to the right
 * 4. Repeat the process for the remaining unsorted portion
 * 5. Continue until the entire array is sorted
 *
 * Time Complexity: O(n²) - always, even in best case
 * Space Complexity: O(1) - in-place sorting
 * Stable: No (can change relative order of equal elements)
 *
 * Characteristics:
 * - Simple to implement and understand
 * - Performs poorly on large datasets
 * - Makes the minimum number of swaps (at most n-1 swaps)
 * - Not adaptive - doesn't take advantage of existing order
 */
function selectionSort(arr: number[]) {
  if (arr.length === 0 || arr.length === 1) return arr;

  for (let x = 0; x < arr.length; x++) {
    let smallestIdx = x;
    for (let i = x + 1; i < arr.length; i++) {
      //compare i and i+1
      // if i is less store the index alongside it's value
      // at the end, swap with the xth index

      if (arr[i]! < arr[smallestIdx]!) {
        smallestIdx = i;
      }
    }
    if (x !== smallestIdx) {
      const temp = arr[x]!;
      arr[x] = arr[smallestIdx] as number;
      arr[smallestIdx] = temp;
    }
  }
}
