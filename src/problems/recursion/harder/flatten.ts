//Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

//TODO: try again
function flatten(arr: any[]): any[] {
  if (arr.length === 0) return [];

  const first = arr[0];
  const rest = arr.slice(1);

  if (Array.isArray(first)) {
    return flatten(first).concat(flatten(rest));
  } else {
    return [first].concat(flatten(rest));
  }
}
