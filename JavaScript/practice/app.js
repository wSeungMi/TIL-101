// const circle = {
//   radius: 5,
//   getDiameter() {
//     return 2 * this.radius;
//   },
// };

// console.log("circle", circle.getDiameter());

// function Circle(radius) {
//   this.radius = radius;
//   console.log((this.radius = radius));
// }

// Circle.prototype.getDiameter = function () {
//   return 2 * this.radius;
// };

// const circle = new Circle(5);
// console.log(circle.getDiameter());

// console.log(this);

// function square(number) {
//   console.log(this);
//   return number * number;
// }

// square(4);

// const person = {
//   name: "승미",
//   getName() {
//     console.log(this);
//     return this.name;
//   },
// };

// console.log(person.getName());

// function Person(name) {
//   this.name = name;
//   console.log(this);
// }

// const me = new Person("승미");

var value = 1;

// const obj = {
//   value: 100,
//   foo() {
//     console.log("foo's this: ", this);
//     setTimeout(function () {
//       console.log("callback's this: ", this);
//       console.log("callback's this.value: ", this.value);
//     }, 100);
//   },
// };

// obj.foo();
// const obj = {
//   value: 100,
//   foo() {
//     const that = this;
//     console.log(that);
//     setTimeout(function () {
//       console.log(that.value);
//     }, 100);
//   },
// };

// obj.foo();

function getThisBinding() {
  return this;
}

const thisArg = { a: 1 };
// console.log(getThisBinding());

// console.log(getThisBinding.apply(thisArg));
// console.log(getThisBinding.call(thisArg));
console.log(getThisBinding.bind(thisArg));
console.log(getThisBinding.bind(thisArg)());
