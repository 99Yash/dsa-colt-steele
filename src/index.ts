function checkCount(str: string) {
  if (str.length === 0) return;
  // loop through the string
  // capture distinct items which are characters only
  const result: Record<string, number> = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (
      !char ||
      char.trim().length === 0 ||
      char.replace(/[^a-zA-Z]/g, '').length === 0
    )
      continue;

    if (char.toLowerCase() in result) {
      result[char.toLowerCase()]! += 1;
    } else {
      result[char.toLowerCase()] = 1;
    }
  }
  return result;
}

console.log(checkCount('tmmma.a;sd.asdhisisM m a23423eandmine'));
