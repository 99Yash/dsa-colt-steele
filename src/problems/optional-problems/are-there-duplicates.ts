// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

//Examples:
//TODO: TRY AGAIN
type T = string | number;

function areThereDuplicates<X extends T>(...args: X[]): boolean {
  return new Set(arguments).size !== arguments.length;

  //OR
  // const collection: Record<string, number> = {};
  // for (const val in arguments) {
  //   collection[arguments[val]] = (collection[arguments[val]] ?? 0) + 1;
  // }
  // for (const key in collection) {
  //   if (collection[key]! > 1) return true;
  // }
  // return false;

  // OR
  // args.sort((a, b) => {
  //   if (a < b) return -1;
  //   if (a > b) return 1;
  //   return 0;
  // });

  // let start = 0;
  // let next = 1;
  // while (next < args.length) {
  //   if (args[start] === args[next]) {
  //     return true;
  //   }
  //   start++;
  //   next++;
  // }
  // return false;
}

console.log(
  areThereDuplicates(1, 2, 3), // false
  areThereDuplicates(1, 2, 2), // true
  areThereDuplicates('a', 'b', 'c', 'a')
); // true
