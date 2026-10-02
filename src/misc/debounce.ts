//what does this do? delay the execution of a function
//  debounce(callAPI, 300)
// waits for 300ms and calls the api.
// returns the function, called
//input: h
// timer A

// input: he
// cancel A
// timer B

// input: hel
// cancel B
// timer C

// input: hell
// cancel C
// timer D

// input: hello
// cancel D
// timer E

//<T extends Function> will only work for something that has no params.

function debounce<T extends (...args: any[]) => any>(func: T, time: number) {
  let timeout: ReturnType<typeof setTimeout>;

  return function (...args: Parameters<T>) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func(...args);
    }, time);
  };
}
