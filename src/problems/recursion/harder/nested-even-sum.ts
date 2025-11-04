// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

// Type guard to check if value is a plain object (not array, function, etc.)
function isPlainObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

//TODO: try again
function nestedEvenSum(ob: Record<string, unknown>): number {
  let s = 0;
  for (const key in ob) {
    const value = ob[key];
    if (typeof value === 'number' && value % 2 === 0) {
      s += value;
    } else if (isPlainObject(value)) {
      s += nestedEvenSum(value);
    }
  }

  return s;
}
