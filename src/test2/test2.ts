// special types

let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type


let w: unknown = 1;
w = "string"; // no error

// let x: never = true;

let y: undefined = undefined;
let z: null = null;


console.log(v, w, y, z);

const testConst: string = "testConst";
