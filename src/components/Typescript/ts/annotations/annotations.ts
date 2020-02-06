// When to use annotations
// 1. Function that return the `any` type
const toJson = '{"age": 10; "name": "Jhon"}';
const person: { age: number; name: string } = JSON.parse(toJson);
console.log(person) // {"age": 10; "name": "Jhon"}

// 2. When we declare a variable on one line and initalizate it later
let isArrayOfWords = ['red', 'green', 'blue'];
let toBeGreen: boolean;

for (let i = 0; i < isArrayOfWords.length; i++) {
  if(isArrayOfWords[i] === 'green') toBeGreen = true;
};

// 3. Variables whose type cannot be inferred correctly
let isNewArrayOfNumbers = [1, 2, 3];
let isNumberAboveZero: boolean | number = false;

for (let i = 0; i < isNewArrayOfNumbers.length; i++) {
  if(isNewArrayOfNumbers[i] > 0) isNumberAboveZero = isNewArrayOfNumbers[i];
};

export { toBeGreen, isNumberAboveZero };