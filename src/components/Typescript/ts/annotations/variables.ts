let age: number = 10;
let speed: string = 'fast';
let isBoolean: boolean = true;

let isUndefined: undefined = undefined;
let isNull: null = null;

// build in objects
let isDate: Date = new Date();

// Array
let isArrayOfStrings: string[] = ['a', 'b', 'c'];
let isArrayOfNumbers: number[] = [1, 2, 3];
let isArrayOfBooleans: boolean[] = [true, false, true];

// Clases
class Car {};
let car: Car = new Car();

// Object literal
let isObject: { x: number; y: string } = { x: 10, y: 'ten' };

export { age, speed, isBoolean, isUndefined, isNull, isDate,  isArrayOfStrings, isArrayOfNumbers, isArrayOfBooleans, car, isObject };