//Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array
//TODO: try again

function sortedFrequency(arr: number[], n: number) {
  if (arr.length === 0) return 0;

  const tempArr = [];

  const i = 0;
  const j = arr.length - 1;
}

console.log(
  sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2), // 4
  sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3), // 1
  sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1), // 2
  sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)
); // -1
