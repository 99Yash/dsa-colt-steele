function capitalizeFirst(arr: string[]): string[] {
  //capitalize the first letter of each string

  if (arr[0] === undefined || arr[0]?.length === 0) return [];
  const word = arr[0];

  const first = word[0]!.toUpperCase().concat(word.slice(1));

  return [first].concat(capitalizeFirst(arr.slice(1)));
}
