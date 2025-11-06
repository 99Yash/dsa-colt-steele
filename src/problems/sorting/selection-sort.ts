//TODO: try again
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
