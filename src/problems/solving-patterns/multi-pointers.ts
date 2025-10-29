//array is already sorted
function countUniqueValues(arr: number[]) {
  if (arr.length === 0) return 0;

  //start 2 pointers adjacent to each other
  //this solution changes the OG array. this way we avoid using a separate value to keep count
  let left = 0;
  let right = 1;

  while (right < arr.length) {
    if (arr[left]! < arr[right]!) {
      left++;
      arr[left] = arr[right]!;
    }
    right++;
  }
  return left + 1;
}

console.log(
  countUniqueValues([1, 1, 1, 1, 1, 2]), //2
  countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]), // 7
  countUniqueValues([]), // 0
  countUniqueValues([-2, -1, -1, 0, 1]) //4
);
