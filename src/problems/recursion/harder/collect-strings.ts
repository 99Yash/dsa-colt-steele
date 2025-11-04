//Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

function collectStrings(object: Record<string, unknown>) {
  const strings = [];

  for (const key in object) {
    const val = object[key];
    if (typeof val === 'string') strings.push(val);
    else if (typeof val === 'object' && val !== null && !Array.isArray(val))
      strings.push(...collectStrings(val as Record<string, unknown>));
  }

  return strings;
}
