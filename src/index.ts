/**
 * Main entry point for DSA practice with Colt Steele's algorithms
 */

console.log('Hello, DSA Practice!');

// Example: Basic array manipulation
function reverseArray<T>(arr: T[]): T[] {
  const reversed: T[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

// Test it out
const numbers = [1, 2, 3, 4, 5];
const reversed = reverseArray(numbers);

console.log('Original:', numbers);
console.log('Reversed:', reversed);
