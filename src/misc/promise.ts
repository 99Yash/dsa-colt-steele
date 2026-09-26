/*const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

myPromise
  .then(handleFulfilledA, handleRejectedA)
  .then(handleFulfilledB, handleRejectedB)
  .then(handleFulfilledC, handleRejectedC);
  */

class MyPromise<T> {
  state: 'PENDING' | 'SUCCESS' | 'FAIL' = 'PENDING';
  value: T | unknown;
  callbacks: ((value: T) => void)[] = []; // ok

  // fns themselves don't create promises. they only happen when used in new Promise()
  constructor(
    fn: (resolve: (v: T) => void, reject: (e: unknown) => void) => void
  ) {
    fn(
      value => this.resolve(value),
      error => this.reject(error)
    );
  }

  then(f: (v: T) => void) {
    this.callbacks.push(f);
    return this;
  }

  reject(e: unknown) {
    this.value = e;
    this.state = 'FAIL';
  }

  resolve(v: T) {
    this.value = v;
    this.state = 'SUCCESS';

    for (const callback of this.callbacks) {
      callback(v);
    }
  }
}
