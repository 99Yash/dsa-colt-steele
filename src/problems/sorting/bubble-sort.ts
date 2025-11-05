function bubbleSort(arr: number[]) {
  //compare the first 2,
  // swap if applicable
  // move on
  // next round, fewer elements, fewer loops

  if (arr.length === 1) return arr;

  for (let x = 0; x < arr.length; x++) {
    let noSwaps = true;
    for (let i = 0; i < arr.length - x - 1; i++) {
      if (arr[i]! > arr[i + 1]!) {
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
