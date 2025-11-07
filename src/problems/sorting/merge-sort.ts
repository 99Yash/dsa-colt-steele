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
