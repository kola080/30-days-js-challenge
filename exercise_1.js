// exercise 1
const dog = {};
dog.name = "ekuke";
dog.legs = 4;
dog.color = "pink";
dog.age = 5;
dog.bark = function () {
  return "woof woof";
};
dog.getName = function () {
  return this.name;
};
dog.getLegs = function () {
  return this.legs;
};
dog.getColor = function () {
  return this.color;
};
dog.getAge = function () {
  return this.age;
};
dog.getName = function () {
  return this.name;
};
console.log(dog.getName());
console.log(dog.getColor());
console.log(dog.getLegs());
console.log(dog.getAge());
console.log(dog.bark());
dog.breed = "gsd";
dog.getInfo = function () {
  return (
    dog.name +
    " " +
    dog.color +
    " " +
    dog.legs +
    " " +
    dog.age +
    " " +
    dog.bark()
  );
};
console.log(dog.getInfo());
console.log(dog);
