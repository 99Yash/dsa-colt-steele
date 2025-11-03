//Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback

function someRecursive(arr: number[], cb: (n: number) => boolean): boolean {
  function helper(index: number): boolean {
    if (index >= arr.length) return false;
    if (cb(arr[index]!)) return true;
    return helper(index + 1);
  }

  return helper(0);
}

console.log(someRecursive([1, 2, 3, 4], n => n > 3)); // true
console.log(someRecursive([1, 2, 3, 4], n => n > 5)); // false
console.log(someRecursive([1, 3, 5, 7], n => n % 2 === 0)); // false
console.log(someRecursive([1, 2, 3, 4], n => n % 2 === 0)); // true
