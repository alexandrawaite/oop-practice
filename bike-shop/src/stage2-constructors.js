function Bike(name, price, rings = [3,7] ) {
  this.name = name;
  this.price = price;
  this.tires = [new Tire(), new Tire()];
  this.frame = new Frame();
  this.rings = rings;
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
}

function Brakes(front = true, back = true) {
  this.front = front;
  this.back = back;
}



module.exports = {
  Bike: Bike,
  Frame: Frame,
  Tire: Tire
}
