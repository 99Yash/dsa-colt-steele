function isAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;

  const freqS1: Record<string, number> = {};
  const freqS2: Record<string, number> = {};

  for (const char of str1) {
    if (!str2.includes(char)) return false;
    freqS1[char] = (freqS1[char] ?? 0) + 1;
  }
  for (const char of str2) {
    freqS2[char] = (freqS2[char] ?? 0) + 1;
  }

  for (const char of str1) {
    if (!(char in freqS2) || freqS1[char] !== freqS2[char]) return false;
  }
  return true;
}

console.log(isAnagram('anagram', 'eanaram'));
