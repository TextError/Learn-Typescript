export const genericType = <T>(arr: T[]): T => arr[arr.length - 1];

let typeOfString, typeOfNumber, typeOfMix, fullName
console.log(typeOfString)
console.log(typeOfNumber)
console.log(typeOfMix)
console.log(fullName)

typeOfNumber = genericType([1, 2, 3]);
typeOfString = genericType(['1', '2', '3']);

export const mixTypes = <X, Y>(a: X, b: Y): [X, Y] => [a, b];
export const mixTypesWithDefault = <X, Y = number>(a: X, b: Y): [X, Y] => [a, b]; // Y = number as default

typeOfString = mixTypes('a', 'b');
typeOfNumber = mixTypes(1, 2);
typeOfMix = mixTypes('a', '1');
typeOfMix = mixTypes<string | null, number | null>(null, 1);
typeOfMix = mixTypesWithDefault<string | null>('a', 1);

export const makeFullName = <T extends { fName: string, lName: string }> (obj: T) => {
  return {
    ...obj,
    fullName: obj.fName + ' ' + obj.lName
  }
};

fullName = makeFullName({ fName: 'Jhon', lName: 'Doe', age: '30' });

interface ITab<T> {
  id: string;
  position: number;
  data: T;
}

type NumberTab = ITab<number>;
type StringTab = ITab<string>;