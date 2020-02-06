export {};

let age: number = 10;
console.log(age);
let speed: string = 'fast';
console.log(speed);
let isBoolean: boolean = true;
console.log(isBoolean);

let isUndefined: undefined = undefined;
console.log(isUndefined);
let isNul: null = null;
console.log(isNul);

// build in objects
let isDate: Date = new Date();
console.log(isDate);

// Array
let isArrayOfStrings: string[] = ['a', 'b', 'c'];
console.log(isArrayOfStrings);
let isArrayOfNumbers: number[] = [1, 2, 3];
console.log(isArrayOfNumbers);
let isArrayOfBooleans: boolean[] = [true, false, true];
console.log(isArrayOfBooleans);

// Clases
class Car {};
let car: Car = new Car();
console.log(car);

// Object literal
let isObject: { x: number; y: string } = { x: 10, y: 'ten' };
console.log(isObject);

// Function
const myFunc: (i: number) => void = (i: number) => console.log(i);
console.log(myFunc);
const add = (a: number, b: number): number => a + b;
console.log(add)

// When to use annotations
// 1. Function that return the `any` type
const toJson = '{"age": 10; "name": "Jhon"}';
const person: { age: number; name: string } = JSON.parse(toJson);
console.log(person) // {"age": 10; "name": "Jhon"}

// 2. When we declare a variable on one line and initalizate it later
let isArrayOfWords = ['red', 'green', 'blue'];
let toBeGreen: boolean = false;
console.log(toBeGreen);

for (let i = 0; i < isArrayOfWords.length; i++) {
  if(isArrayOfWords[i] === 'green') toBeGreen = true;
};

// 3. Variables whose type cannot be inferred correctly
let isNewArrayOfNumbers = [1, 2, 3];
let isNumberAboveZero: boolean | number = false;

for (let i = 0; i < isNewArrayOfNumbers.length; i++) {
  if(isNewArrayOfNumbers[i] > 0) isNumberAboveZero = isNewArrayOfNumbers[i];
};
console.log(isNumberAboveZero);