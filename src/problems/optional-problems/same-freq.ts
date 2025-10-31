//Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameValue(num1: number, num2: number): boolean {
  if (num1.toString().length !== num2.toString().length) return false;
  const frequency: Record<string, number> = {};

  for (let i = 0; i < num1.toString().length; i++) {
    const digit = num1.toString()[i];

    if (digit === undefined) return false;

    if (digit in frequency) {
      frequency[digit]!++;
    } else {
      frequency[digit] = 1;
    }
  }

  for (let i = 0; i < num2.toString().length; i++) {
    const digit = num2.toString()[i];

    if (digit === undefined) return false;

    if (digit in frequency) {
      frequency[digit]!--;
    } else {
      return false;
    }
  }

  for (const key in frequency) {
    if (frequency[key] === 0) return true;
    else return false;
  }
  return false;
}

console.log(sameValue(182, 281)); //true
console.log(sameValue(34, 14)); //false
console.log(sameValue(3589578, 5879385)); //true
console.log(sameValue(22, 222)); //false
