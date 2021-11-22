'use strict';

console.log('-----------');
console.log('Пункт №1:');
console.log('-----------');

const data = fetch('https://reqres.in/api/users?per_page=12')
  .then(response => response.json())
  .then(body => {
    console.log(body.data);
    return body;
  });

data.then(body => {

  console.log('-----------');
  console.log('Пункт №2:');
  console.log('-----------');

  body?.data.forEach((item) => {
    console.log(item?.last_name);
  });
});

data.then(body => {
  console.log('-----------');
  console.log('Пункт №3:');
  console.log('-----------');

  const dataFiltered = body?.data.filter((item) => {
    return item?.last_name[0] === 'F';
  });
  console.log(dataFiltered);
});

data.then(body => {
  console.log('-----------');
  console.log('Пункт №4:');
  console.log('-----------');

  const allNames = body?.data.reduce((accumulator, item) =>
    `${accumulator} ${item.first_name} ${item.last_name},`, 'Наша база содержит данные следующих пользователей:')
  console.log(allNames);
});

data.then(body => {
  console.log('-----------');
  console.log('Пункт №5:');
  console.log('-----------');

  console.log('Список ключей:');
  Object.entries(body.data[0]).forEach(([key]) => console.log(key))
});