'use strict';

let num1 = prompt('Введите первое число');
if (!num1) {
  console.log('Первое число не указано');
} else if (!Number(num1) && num1 != '0') {
  console.log('Некорректный ввод чисел');
} else {
  const operator = prompt('Введите знак');
  if (!operator) {
    console.log('Не введён знак');
  } else if (operator === '+' || operator === '-' || operator === '/' || operator === '*') {
    let num2 = prompt('Введите второе число');
    if (!num2) {
      console.log('Второе число не указано');
    } else if (!Number(num2) && num2 != '0') {
      console.log('Некорректный ввод чисел');
    } else {

      num1 = Number(num1);
      num2 = Number(num2);

      switch (operator) {
        case '+': {
          console.log(num1 + num2);
          break;
        }
        case '-': {
          console.log(num1 - num2);
          break;
        }
        case '/': {
          console.log(num1 / num2);
          break;
        }
        case '*': {
          console.log(num1 * num2);
        }
      }
    }
  } else {
    console.log('Программа не поддерживает такую операцию');
  }
}