//TODO: Try again
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
