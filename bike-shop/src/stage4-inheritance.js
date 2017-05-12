class Frame {
  constructor(color = 'black', size = 55, style = 'street') {
  this.color = color;
  this.size = size;
  this.style = style;
 }
}

class Tire {
  constructor(diameter = 22, type = 'street') {
    this.diameter = diameter;
    this.type = type;
    this.flat = false;
 }
}

class Brakes {
 constructor(front = true, back = true) {
    this.front = front;
    this.back = back;
 }
}

class Bike {
  constructor(name, price, rings = [3,7]) {
  const defaultRings = [3, 7];
  const defaultBrakes = {
    front: true,
    back: true
  };
  this.name = name;
  this.price = price;
  this.moving = false;
  this.rings = rings;
  this.tires = [new Tire(), new Tire()];
  this.frame = new Frame();
  this.defaultSagSetting = 20;
  this.brakes = defaultBrakes;
  }
  gearSpeeds() {
    return this.rings[0] * this.rings[1];
  };
}

class MountainBike extends Bike {
  constructor(...args) {
    super(...args);
    this.frame.style = 'mountain';
    this.tires[0].type = 'dirt';
    this.tires[1].type = 'dirt';
    this.shocks = 20;
  }
  adjustShocks(x) {
    this.shocks = x;
  }
}

class BMXBike extends Bike {
  constructor(...args) {
    super(...args);
    this.brakes.front = false;
    this.tires[0].diameter = 20;
    this.tires[1].diameter = 20;
    }
}

class RacingBike extends Bike {
  constructor(...args) {
    super(...args);
    this.frame.style = 'racing';
    this.tires[0].type = 'road';
    this.tires[1].type = 'road';
    this.rings = [3,10];
    }
}


module.exports = {
  Bike: Bike,
  MountainBike: MountainBike,
  BMXBike: BMXBike,
  RacingBike: RacingBike,
}
