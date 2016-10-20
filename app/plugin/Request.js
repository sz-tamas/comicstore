import $ from 'jquery';

const Get = function(url, params, callback) {
    $.ajax({
        url: url, method: 'get', data: params, dataType: 'json',
    }).done(callback);
};

const Post = function(url, params, callback) {
    $.ajax({
        url: url, method: 'post', data: params, dataType: 'json',
    }).done(callback);
};

export default {Get, Post}