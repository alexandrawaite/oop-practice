function Bike(name, price, rings = [3,7]) {
  this.name = name;
  this.price = price;
  this.moving = false;
  this.rings = rings;
  this.tires = [new Tire(), new Tire()];
  this.frame = new Frame();
  this.brakes = new Brakes();
}

function Frame(color = 'black', size = 55, style = 'street') {
  this.color = color;
  this.size = size;
  this.style = style;
}

function Tire(diameter = 22, type = 'street') {
  this.diameter = diameter;
  this.type = type;
  this.flat = false;
}

function Brakes(front = true, back = true) {
  this.front = front;
  this.back = back;
}

Tire.prototype.isFlat = function () {
  return this.flat;
}

Tire.prototype.puncture = function() {
  this.flat = true;
}

Tire.prototype.repair = function() {
  this.flat = false;
}

Bike.prototype.isMoving = function() {
  return this.moving;
}

Bike.prototype.pedal = function() {
  if (this.tires[0].flat === true || this.tires[1].flat === true) {
    throw "Can't pedal with a flat tire";
  }
  this.moving = true;
}

Bike.prototype.brake = function() {
  this.moving = false;
}

Bike.prototype.gearSpeeds = function() {
  return this.rings[0] * this.rings[1];
}


module.exports = {
  Bike: Bike,
  Frame: Frame,
  Tire: Tire
}
