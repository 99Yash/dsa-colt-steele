//Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of the integer in the array. If the value is not found, return -1.

//TODO: try again
function findRotatedIndex(arr: number[], n: number) {
  if (arr.length === 0) return -1;

  const i = 0;
  const j = arr.length - 1;
}

console.log(
  findRotatedIndex([3, 4, 1, 2], 4), // 1
  findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8), // 2
  findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3), // 6
  findRotatedIndex([37, 44, 66, 102, 10, 22], 14), // -1
  findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12), // -1
  findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)
); // 5
