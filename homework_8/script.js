'use strict';

// Без звёздочки

function makeFibonacciFunction1() {
  let a = 0;
  let b = 1;

  return function() {
    console.log(b);
    const c = a + b;
    a = b;
    b = c;
  }
}
const fibonacci1 = makeFibonacciFunction1();

fibonacci1();
fibonacci1();
fibonacci1();
fibonacci1();
fibonacci1();

// * Со звёздочкой

const fibonacci2 = (function makeFibonacciFunction2() {
  let a = 0;
  let b = 1;

  return function() {
    console.log(b);
    const c = a + b;
    a = b;
    b = c;
  }
})();

fibonacci2();
fibonacci2();
fibonacci2();
fibonacci2();
fibonacci2();
