'use strict';

const button = document.querySelector('.form__button');
const emailInput = document.getElementById('input-email');
const passwordInput = document.getElementById('input-password');
const emailLabel = document.querySelector('.form__label-email');
const passwordLabel = document.querySelector('.form__label-password');
const checkbox = document.querySelector('.form__checkbox');
const checkboxMark = document.querySelector('.form__checkbox-mark');
const emailRequiredSign = document.querySelector('.form__email-wrapper > .form__required-sign');
const passwordRequiredSign = document.querySelector('.form__password-wrapper > .form__required-sign');
const checkboxRequiredSign = document.querySelector('.form__checkbox-wrapper > .form__required-sign');
const noEmail = document.querySelector('.form__email-warning');
const noPassword = document.querySelector('.form__password-warning');
const noCheckbox = document.querySelector('.form__checkbox-warning');
const userCredentials = {};

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
  const re = /^[^-() /]*$/;
  return re.test(password);
}

// Проверка чекбокса

const checkboxValidation = () => {
  if (checkbox.checked) {
    checkboxMark.classList.remove('invalid-input');
    checkboxRequiredSign.classList.remove('invalid-text');
    noCheckbox.style.display = 'none';
    return true
  } else {
    checkboxMark.classList.add('invalid-input');
    checkboxRequiredSign.classList.add('invalid-text');
    noCheckbox.style.display = 'block';
  }
}

// Проверка емейла

const emailValidation = () => {
  if (emailInput.value !== "") {

    if (validateEmail(emailInput.value)) {
      emailInput.classList.remove('invalid-input');
      emailLabel.classList.remove('invalid-text');
      emailRequiredSign.classList.remove('invalid-text');
      noEmail.style.display = 'none';
      userCredentials.email = emailInput.value;
    } else {
      noEmail.textContent = 'Email невалидный';
    }
  }

  if (emailInput.value === "") {
    emailInput.classList.add('invalid-input');
    emailLabel.classList.add('invalid-text');
    emailRequiredSign.classList.add('invalid-text');
    noEmail.style.display = 'block';
    noEmail.textContent = 'Поле обязательно для заполнения';
  }
}

// Проверка пароля

const passwordValidation = () => {
  if (passwordInput.value !== "") {

    if (passwordInput.value.length >= 8 && validatePassword(passwordInput.value)) {
      passwordInput.classList.remove('invalid-input');
      passwordLabel.classList.remove('invalid-text');
      passwordRequiredSign.classList.remove('invalid-text');
      noPassword.style.display = 'none';
      userCredentials.password = passwordInput.value;
    } else {
      noPassword.textContent = 'Пароль невалидный';
    }

    if (passwordInput.value.length < 8) {
      passwordInput.classList.add('invalid-input');
      passwordLabel.classList.add('invalid-text');
      passwordRequiredSign.classList.add('invalid-text');
      noPassword.style.display = 'block';
      noPassword.textContent = 'Пароль должен содержать как минимум 8 символов';
    }
  }
  if (passwordInput.value === "") {
    passwordInput.classList.add('invalid-input');
    passwordLabel.classList.add('invalid-text');
    passwordRequiredSign.classList.add('invalid-text');
    noPassword.style.display = 'block';
    noPassword.textContent = 'Поле обязательно для заполнения';
  }
}

button.addEventListener('click', (event) => {
  event.preventDefault();
  emailValidation();
  passwordValidation();
  checkboxValidation();
  if (userCredentials.email && userCredentials.password && checkbox.checked) {
    console.log(userCredentials);
  }
})