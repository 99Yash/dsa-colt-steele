//Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

//Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

//Bonus Constraints:

//If M is the length of message and N is the length of letters:

//Time Complexity: O(M+N)

//Space Complexity: O(N)

//Examples:

function constructNote(message: string, letters: string): boolean {
  const freqLetters: Record<string, number> = {};

  for (const char of letters) {
    if (char in freqLetters) {
      freqLetters[char]!++;
    } else {
      freqLetters[char] = 1;
    }
  }

  for (const char of message) {
    if (char in freqLetters) {
      freqLetters[char]!--;
    } else {
      return false;
    }
  }

  if (Object.values(freqLetters).filter(v => v < 0).length > 0) return false;
  return true;
}

console.log(
  constructNote('aa', 'abc'), // false
  constructNote('abc', 'dcba'), // true
  constructNote('aabbcc', 'bcabcaddff')
); // true
