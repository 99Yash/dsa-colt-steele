//Write a recursive function called reverse which accepts a string and returns a new string in reverse.

export function reverse(str: string) {
  if (str.length === 0) return '';
  let nnn = str[str.length - 1] ?? '';

  nnn += reverse(str.substring(0, str.length - 1));

  return nnn;
}
