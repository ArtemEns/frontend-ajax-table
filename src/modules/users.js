'use strict';

var $ = require('jquery');

module.exports = {
    getAll: function (callback) {
        $.ajax({
            url: 'http://www.mocky.io/v2/55f748b33568195d044b3dc8',
            success: function (data) {
                callback(data);
            },
            error: function(){
                console.error('HTTP error')
            }
        });
    },
};