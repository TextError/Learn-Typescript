const isObject = {
  fName: 'Jhon',
  lName: 'Doe',
  age: 30,
  address: {
    country: 'UK',
    city: 'London'
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age }: { age: number } = isObject;
const { address: { country, city } }: { address: { country: string, city: string } } = isObject;

export { age, country, city };

