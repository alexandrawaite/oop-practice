function Bike(rings = [3,7]) {
  this.moving = false;
  this.rings = rings;
  this.tires = [new Tire(), new Tire()];
}

function Frame() {
  // your code here
}

function Tire() {
  this.flat = false;
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
