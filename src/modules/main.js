'use strict';
var $ = require('jquery');
var tableAllElem = $('.table-all');
var tableActive = $('.table-active');
var tableAge = $('.table-age');
var tableName = $('.table-name');
var tableLastname = $('.table-lastname');
var USERS_URL = 'http://www.mocky.io/v2/55f748b33568195d044b3dc8';
var users = require('./users.js');
var renderHead = require('./renderHead.js');
var renderRow = require('./renderRow.js')


//ALL USERS

$('.all-usersThead').append(renderHead())   // ПОДГРУЗКА ЗАГЛАВНОГО МЕНЮ 
users.getAll(function (data) {
    data.map(renderRow).forEach(function (item) {
        tableAllElem.append(item)
    })
});

//ACTIVE USERS
function isActiveUser(item) {             // функция - по Активным пользователям
    return item.isActive
};

$('.active-usersThead').append(renderHead())   // ПОДГРУЗКА ЗАГЛАВНОГО МЕНЮ 
users.getAll(function (data) {
    data.filter(isActiveUser).map(renderRow).forEach(function (item) {
        tableActive.append(item)
    }) //фильтр по активным
});

//AGE SORTING
function compareAge(personA, personB) {     // функция - по возрасту
    return personA.age - personB.age;
};

$('.agesort-usersThead').append(renderHead())   // ПОДГРУЗКА ЗАГЛАВНОГО МЕНЮ 
users.getAll(function (data) {
    data.sort(compareAge).map(renderRow).forEach(function (item) {
        tableAge.append(item)
    }) //фильтр по возрасту
})

//NAME SORTING
function compareName(userA, userB) {                    // функция - по имени
    var nameA = userA.name.first + userA.name.last;
    var nameB = userB.name.first + userB.name.last;
    if (nameA < nameB)
        return -1
    if (nameA > nameB)
        return 1
    return 0
}

$('.namesort-usersThead').append(renderHead())   // ПОДГРУЗКА ЗАГЛАВНОГО МЕНЮ 
users.getAll(function (data) {
    data.sort(compareName).map(renderRow).forEach(function (item) {
        tableName.append(item)
    }) //фильтр по имени
});

//LASTNAME SORTING

function compareLastname(item) {                        // функция - по фамилии
    if (item.name.last.length >= 6) {
        return true;
    } else {
        return false;
    }
}

$('.lastnamesort-usersThead').append(renderHead())   // ПОДГРУЗКА ЗАГЛАВНОГО МЕНЮ 
users.getAll(function (data) {
    data.sort(compareLastname).map(renderRow).forEach(function (item) {
        tableLastname.append(item)
    }) //по фамилии
});

// data.filter(function (item) {
//     return $.