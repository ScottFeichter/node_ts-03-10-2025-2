// primitive types

let isRaining: boolean = false;
let age: number = 29;
let firstName: string = "Scott";

function info(weather: boolean, age: number, name: string): void {
  console.log(`My name is ${name} I am ${age}. Today it is raining? ${weather}`);
}

info(isRaining, age, firstName);
