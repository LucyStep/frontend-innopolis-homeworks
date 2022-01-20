'use strict';

// Без звёздочки

function makeFibonacciFunction1() {
  let prev = 0;
  let next = 1;

  return function() {
    console.log(next);
    const fibSum = prev + next;
    prev = next;
    next = fibSum;
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
  let prev = 0;
  let next = 1;

  return function() {
    console.log(next);
    const fibSum = prev + next;
    prev = next;
    next = fibSum;
  }
})();

fibonacci2();
fibonacci2();
fibonacci2();
fibonacci2();
fibonacci2();
