//TODO: Try again
function insertionSort(arr: number[]) {
  if (arr.length === 0 || arr.length === 1) return arr;

  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j]! > current!) {
      arr[j + 1] = arr[j] as number;
      j--;
    }

    arr[j + 1] = current as number;
  }
}
