'use strict';
var $ = require('jquery');
var data = require('./data.js');
var tableAllElem = $('.table-all');
var tableActive = $('.table-active');
var tableAge = $('.table-age');
var tableName = $('.table-name');
var tableLastname = $('.table-lastname');
var USERS_URL = 'http://www.mocky.io/v2/55f748b33568195d044b3dc8';
var users = require('./users.js');



function renderHead(item) {
    return `<tr>
        <th>Фото</th>
        <th>Полное имя</th>
        <th>Активный</th>
        <th>Описание</th>
        <th>Баланс</th>
        <th>Возраст</th>
        <th>Дата регистрации</th>
        <th>Компания</th>
        <th>Емейл</th>
        <th>Номер телефона</th>
        <th>Адрес</th>
        </tr>`;
}

function renderRow(item) {
    return $(`<tr>
        <td><img src ="${item.picture}" width=32 height=32></td>
        <td>${item.name.first} ${item.name.last}</td>
        <td>${item.isActive}</td>
        <td>${item.about}</td>
        <td>${item.balance}</td>
        <td>${item.age}</td>
        <td>${item.registered}</td>
        <td>${item.company}</td>
        <td><a href="mailto:${item.email}">${item.email}</a></td>
        <td><a href="tel:${item.phone}"> ${item.phone}</a></td>
        <td>${item.address}</td>
         </tr>`)
}
//ALL USERS
data.map(renderRow).forEach(function (item) {
    tableAllElem.append(item)
})

//ACTIVE USERS
function isActiveUser(item) {
    return item.isActive
};


$('table thead').append(renderHead())   // ПОДГРУЗКА ЗАГЛАВНОГО МЕНЮ ВО ВСЕ ТАБЛИЦЫ ЧЕРЕЗ THEAD
users.getAll(function (data) {

    data.filter(isActiveUser).map(renderRow).forEach(function (item) {
        tableActive.append(item)
    }) //фильтр по активным
});

//AGE SORTING
function compareAge(personA, personB) {
    return personA.age - personB.age;
}

data.sort(compareAge).map(renderRow).forEach(function (item) {
    tableAge.append(item)
}) //фильтр по возрасту

//NAME SORTING
function compareName(userA, userB) {
    var nameA = userA.name.first + userA.name.last;
    var nameB = userB.name.first + userB.name.last;
    if (nameA < nameB)
        return -1
    if (nameA > nameB)
        return 1
    return 0
}

data.sort(compareName).map(renderRow).forEach(function (item) {
    tableName.append(item)
}) //фильтр по имени

//LASTNAME SORTING

function compareLastname(item) {
    if (item.name.last.length >= 6) {
        return true;
    } else {
        return false;
    }
}

data.sort(compareLastname).map(renderRow).forEach(function (item) {
    tableLastname.append(item)
}) //по фамилии


// data.filter(function (item) {
//     return $.