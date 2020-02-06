const isArray: string[] = ['one', 'two', 'tree'];
const isArrayEmptyOfString: string[] = [];
const nestedArray: string[][] = [['1'], ['2'], ['3']];


// Help with inference when extracting values;
const number = isArray[1]; // TS knows is a string;
const pop = nestedArray.pop();

// Prevent incompatible values
// @ts-ignore
isArrayEmptyOfString.push(100);

// Flexible types
const isMultiArray: (Date | string)[] = [new Date()];
isMultiArray.push('2020-10-10');

export { number, pop }