//Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct chars

//TODO: try again
function findLongestSubstring(str: string) {
  if (str.length === 0) return 0;

  let i = 0;
  let longest = 0;

  const lookup: Record<string, number> = {};

  for (const char of str) {
    if (lookup[char]) {
      i = Math.max(i, lookup[char]);
    }
    longest = Math.max(longest, str.indexOf(char) - i + 1);

    lookup[char] = i + 1;
  }
  return longest;
}

console.log(
  findLongestSubstring(''), // 0
  findLongestSubstring('rithmschool'), // 7
  findLongestSubstring('thisisawesome'), // 6
  findLongestSubstring('thecatinthehat'), // 7
  findLongestSubstring('bbbbbb'), // 1
  findLongestSubstring('longestsubstring'), // 8
  findLongestSubstring('thisishowwedoit')
); // 6
