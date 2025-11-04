//Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

//TODO: try again
function capitalizeWords(arr: string[]): string[] {
  if (arr.length === 0) return [];

  const word = arr[0]!.toUpperCase();

  return [word].concat(capitalizeWords(arr.slice(1)));
}
