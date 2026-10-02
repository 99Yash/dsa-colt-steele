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

function debounce<T extends Function>(func: Function, time: number) {
  let timeout: ReturnType<typeof setTimeout>;

  return function () {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func();
    }, time);
  };
}
