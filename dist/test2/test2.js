"use strict";
// special types
let v = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type
let w = 1;
w = "string"; // no error
// let x: never = true;
let y = undefined;
let z = null;
console.log(v, w, y, z);
const testConst = "testConst";
