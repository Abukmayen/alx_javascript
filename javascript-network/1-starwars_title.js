#!/usr/bin/node

// import request
const { isUtf8 } = require('buffer');
const { parse } = require('path');
const request = require('request');


// pass cmd line argument
const id = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/'+id;

parts = [];
// make a GET request
request
.get(url, {encoding: 'utf-8'})
.on('data', function (data) {
    parts.push(data);
})
.on('complete', function () {
    const response = JSON.parse(parts)
    console.log(response.title)
})
