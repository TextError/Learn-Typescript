import { isObject } from "./variables";


// Function
const myFunc: (i: number) => void = (i: number) => console.log(i);
const add = (a: number, b: number): number => a + b;
const substract = (a: number, b: number) => `${a} - ${b}` // string
function devide(a: number, b: number): number { return a / b };
const multiply = function(a: number, b: number): number { return a * b };
const log = (message: string): void => console.log(message);
const trowError = (message: string): never => { throw new Error(message) };
const destructuring = ({ x, y }: { x: number, y: string }) => x + y;
destructuring(isObject);

export { myFunc, add, substract, devide, multiply, log, trowError };