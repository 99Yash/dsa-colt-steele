type DE = string | number;

function linearSearch<X extends DE>(arr: X[], n: X) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) return i;
  }
  return -1;
}
