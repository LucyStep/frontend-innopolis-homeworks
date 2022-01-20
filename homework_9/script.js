'use strict';

const getData = new Promise((resolve) => {
  fetch('https://reqres.in/api/users?per_page=12')
    .then(response => response.json())
    .then((body) => {
      resolve(body.data);
    });
});

getData.then((value) => {
  console.log('-----------');
  console.log('Пункт №1');
  console.log('-----------');
  console.log(value);
});

const getLastName = (lastName) => {
  console.log('-----------');
  console.log('Пункт №2');
  console.log('-----------');
  lastName.forEach((item) => {
    console.log(item?.last_name);
  });
};

getData.then((value) => {
  return getLastName(value);
});

const getFlastName = (fLastName) => {
  console.log('-----------');
  console.log('Пункт №3');
  console.log('-----------');
  const getDataFiltered = fLastName.filter((item) => {
    return item?.last_name[0] === 'F';
  });
  console.log(getDataFiltered);
};

getData.then((value) => {
  return getFlastName(value);
});

const getAllUsers = (allUsers) => {
  console.log('-----------');
  console.log('Пункт №4');
  console.log('-----------');
  const usersData = allUsers.reduce((accumulator, item) =>
    `${accumulator} ${item.first_name} ${item.last_name},`, 'Наша база содержит данные следующих пользователей:')
  console.log(usersData);
};

getData.then((value) => {
  return getAllUsers(value);
});

const getUserKeys = (userKeys) => {
  console.log('-----------');
  console.log('Пункт №5');
  console.log('-----------');
  console.log('Список ключей:');
  Object.entries(userKeys[0]).forEach(([key]) => console.log(key))
};

getData.then((value) => {
  return getUserKeys(value);
});