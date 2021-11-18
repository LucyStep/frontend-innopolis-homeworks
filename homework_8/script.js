'use strict';

const fibonacci = (function makeFibonacciFunction() {
  let a = 0;
  let b = 1;

  return function count() {
    console.log(b);
    const c = a + b;
    a = b;
    b = c;
  }
})();

fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
