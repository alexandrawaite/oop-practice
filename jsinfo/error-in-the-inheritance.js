// The error is Rabbit.prototype overwriting Animal.prototype on line 15. This mixes
// the two objects together and the result Animal.prototype.walk will have all animals
// 'bounce'

function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function() {
  alert(this.name + 'walks');
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = Animal.prototype;

Rabbit.prototype.walk = function() {
  alert(this.name + ' bounces!');
};
