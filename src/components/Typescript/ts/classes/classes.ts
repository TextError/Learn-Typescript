class Vehicle {
  constructor(public color: string) {};

  protected honk(): void {
    console.log('beep')
  }
}

const vehicle = new Vehicle('orange');
// Property 'honk' is protected and only accessible within class 'Vehicle' and its subclasses.
// @ts-ignore
vehicle.honk();

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color)
  }
  private drive(): void {
    console.log('vroom');
  }
  public startDriving(): void {
    this.drive();
  }
};

const car = new Car(4, 'blue');
console.log(car);



export {};