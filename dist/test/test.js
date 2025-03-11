"use strict";
// primitive types
let isRaining = false;
let age = 29;
let firstName = "Scott";
function info(weather, age, name) {
    console.log(`My name is ${name} I am ${age}. Today it is raining? ${weather}`);
}
info(isRaining, age, firstName);
