/**
 * QUICK SORT - Divide and Conquer Algorithm
 *
 * How it works:
 * 1. Choose a pivot element (first element in this implementation)
 * 2. Partition the array: elements smaller than pivot go left, larger go right
 * 3. Recursively sort the left partition (elements < pivot)
 * 4. Recursively sort the right partition (elements > pivot)
 * 5. The pivot ends up in its final sorted position
 *
 * Time Complexity: O(n log n) average case, O(n²) worst case
 * Space Complexity: O(log n) due to recursion stack
 * Stable: No
 * In-place: Yes (this implementation)
 *
 * The pivotHelper function:
 * - Selects a pivot and partitions the array around it
 * - Returns the final index of the pivot element
 * - All elements left of pivot are smaller, right are larger
 */
function pivotHelper(arr: number[], start: number, end: number) {
  if (start >= arr.length) start = 0;
  if (end >= arr.length) end = arr.length - 1;

  //pick a pivot.
  // return the index of the end

  const pivot = arr[start] as number;
  let swapIdx = start;

  for (let i = start + 1; i < end; i++) {
    if (pivot > arr[i]!) {
      swapIdx++;
      //* increment the pivot index and swap the current element with the pivot index
      const temp = arr[i]!;
      arr[i] = arr[swapIdx]!;
      arr[swapIdx] = temp;
    }
  }

  const temp = arr[start];
  arr[start] = arr[swapIdx] as number;
  arr[swapIdx] = temp as number;

  return swapIdx;
}

function quickSort(arr: number[], l = 0, r = arr.length - 1) {
  if (arr.length === 0 || arr.length === 1) return arr;

  if (l < r) {
    // l and r are just pointers. if they are the same we've hit the end of one of the branches
    const pivotIdx = pivotHelper(arr, l, r);
    quickSort(arr, l, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, r);
  }
  return arr;
}
