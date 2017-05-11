// When eat(food) executes this.stomach.push(food) and you feed speedy, lazy also
// eats because they are both inheriting the hamster stomach array that is being pushed.
// When you push to an array, it looks for stomach in the prototype chain to hamster.
// If we simply assign this.stomach to food, the value is written directly into the object.


let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [food];
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

speedy.eat("apple");
alert(speedy.stomach);

alert(lazy.stomach);
