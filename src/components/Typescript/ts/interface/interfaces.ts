export interface Icar {
  name: string;
  year: number;
  isBorken: boolean
};

export interface IofProps {
  isString: string;
  isNumber: number;
  isObject: { a: string, b: number };
  isArrayOfString: string[];
  isArrayOfNumbers: number[];
  isNestedArrayOfStrings: string[][];
  isNestedArrayOfNumbers: number[][];
  isTuple: [string, number, boolean];
  isBoolean: boolean;
  isNull: null;
  isUndefined: undefined;
  isVoidFunc(): void;
  isStringFunc(a:string, b:string): string;
  isNotRequired?: string | number | object;
}

const car = {
  name: 'Audi',
  year: 2000,
  isBorken: true
};

const checkCar = ({ name, year, isBorken }: Icar): void => {
  console.log(`${name} of year ${year} is broken? ${isBorken}`)
}

checkCar(car);