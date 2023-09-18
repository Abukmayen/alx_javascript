#!/usr/bin/node

const { copyFileSync } = require('fs');
const request = require('request');

const apiUrl = process.argv[2];
const completedTask = [];
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Request failed with status code:', response.statusCode);
    return;
  }

  try {
    // Parse the JSON response
    const todos = JSON.parse(body);

    // an array of completed tasks
    todos.forEach(function (complete) {
      if (complete.completed) {
        completedTask.push(complete);
      }
    })

    const userCompleted = {};
    completedTask.forEach(function (user) {
      const userId = user.userId;
      if (userCompleted[userId]) {
        userCompleted[userId]++;
      }
      else {
        userCompleted[userId] = 1;
      }
    })
    console.log(userCompleted);
  } catch (e) {
    console.error('Error parsing JSON:', e);
  }
});
