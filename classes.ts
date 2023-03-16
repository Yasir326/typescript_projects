class Vehcile {
  constructor(public color: string) {}
  protected honk(): void {
    console.log('beep beep');
  }
}

class Car extends Vehcile {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car(4, 'orange');
car.startDrivingProcess();
console.log(car.color);
console.log(car.wheels);
