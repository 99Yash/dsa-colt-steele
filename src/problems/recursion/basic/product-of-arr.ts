function productOfArray(arr: number[]) {
  if (arr.length === 0) return 1;
  let p = 1;
  for (let i = 0; i < arr.length; i++) {
    p = arr[i]! * productOfArray(arr.slice(0, i));
  }
  return p;
}
