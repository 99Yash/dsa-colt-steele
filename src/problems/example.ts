/**
 * Example problem structure for DSA practice
 *
 * Problem: Write a function that reverses a string
 */

export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

// Alternative implementation without built-in reverse
export function reverseStringManual(str: string): string {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Test examples
if (require.main === module) {
  console.log(reverseString('hello')); // 'olleh'
  console.log(reverseStringManual('world')); // 'dlrow'
}
