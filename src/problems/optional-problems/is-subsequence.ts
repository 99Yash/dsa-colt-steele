//Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

//TODO: try again
function isSubsequence(a: string, b: string) {
  if (!a[0]) return true;
  if (b.length < a.length || !b.includes(a[0])) return false;
}

console.log(
  isSubsequence('hello', 'hello world'), // true
  isSubsequence('sing', 'sting'), // true
  isSubsequence('abc', 'abracadabra'), // true
  isSubsequence('abc', 'acb')
); // false (order matters))
