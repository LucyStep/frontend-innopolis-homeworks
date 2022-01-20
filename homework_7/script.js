'use strict'

let num1 = prompt("Введите первое число");
if (num1 === "") {
  alert("Первое число не указано")
} else if (isNaN(Number(num1))) {
  alert("Некорректный ввод чисел")
} else {
  let operator = prompt("Введите знак");
  if (operator === "") {
    alert("Не введен знак")
  } else if (operator === '+' || operator === '-' || operator === '/' || operator === '*') {
    let num2 = prompt("Введите второе число");
    if (num2 == "") {
      alert("Второе число не указано")
    } else if (isNaN(Number(num2))) {
      alert("Некорректный ввод чисел")
    } else {

      num1 = Number(num1);
      num2 = Number(num2);

      if (operator === "+") {
        let result = num1 + num2;
        alert(result)
      } else if (operator === "-") {
        let result = num1 - num2;
        alert(result)
      } else if (operator === "/") {
        if (num2 === 0) {
          alert("Программа не поддерживает такую операцию")
        } else {
          let result = num1 / num2;
          alert(result)
        }
      } else if (operator === "*") {
        let result = num1 * num2;
        alert(result)
      }
    }
  } else {
    alert("Программа не поддерживает такую операцию")
  }
}