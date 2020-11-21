"use strict";

class Car {

    static getSpecs(car = {}) {
      this._car = car;
      return console.log(this._car);
    };

    constructor({ price, maxSpeed, isOn, distance }) {
      this.speed = 0;
      this._price = price;
      this.maxSpeed = maxSpeed;
      this.isOn = isOn;
      this.distance = distance;
    };

    get price() {
      return this._price;
    };
  
    set price(newPrice) {
      this._price = newPrice;
    };

    turnOn() {
      this.isOn = true;
    };

    turnOff() {
      this.isOn = false;
      this.speed = 0;
    };
  
    accelerate(value) {
      this.speed = this.speed + value > this.maxSpeed ? this.speed : this.speed + value;
    };
  
    decelerate(value) {
      if (this.resultSpeed > 0) {
        this.speed -= value;
      } else {
        this.speed = this.maxSpeed;
      };
    };

    drive(hours) {
      if (this.isOn == true) {
        this.distance = hours * this.speed;
      };
    };
  };
  
  const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);
  
  Car.getSpecs(mustang);
  
  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();
  
  Car.getSpecs(mustang);
  
  console.log(mustang.price);
  mustang.price = 4000;
  console.log(mustang.price);