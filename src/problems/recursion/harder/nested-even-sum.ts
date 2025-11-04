// /Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(ob: object) {
  let s = 0;
  if (Object.keys(ob).length === 0) return s;

  function helper(obj: object) {
    const val = Object.values(obj).at(0);
    if (typeof val === 'number') {
      const isEven = val % 2 === 0;

      isEven ? (s += val) : s;
      //if not a number, if an object, then grab the value (object2) and recurse
    } else if (typeof val === 'object' && val !== null) {
      return s + nestedEvenSum(val);
    } else return s;
  }

  helper(ob);

  return s;
}
