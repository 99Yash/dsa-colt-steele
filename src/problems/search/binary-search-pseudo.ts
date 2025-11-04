type C = string | number;

//TODO: try again
function binarySearch<X extends C>(arr: X[], n: X) {
  // Binary search requires a sorted array
  if (arr.length === 0) return -1;

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const midIdx = Math.floor((start + end) / 2);

    if (arr[midIdx] === n) {
      return midIdx;
    } else if (arr[midIdx]! > n) {
      end = midIdx - 1;
    } else {
      start = midIdx + 1;
    }
  }

  return -1;
}
