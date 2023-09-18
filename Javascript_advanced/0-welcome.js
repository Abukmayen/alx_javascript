#!/usr/bin/node 
/*
Lexical Scoping
*/
function welcome(firstName, lastName) {
    const fullName = firstName + ' ' + lastName;
    // a closure function
    function displayFullName() {
        alert('Welcome '+ fullName + '!');
    }
    displayFullName()
}
