import { reverse } from './reverse';

function isPalindrome(str: string) {
  if (str.length === 0) return true;

  const rev = reverse(str);

  return rev === str;
}
