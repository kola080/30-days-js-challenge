// fizzbuzz
// function getFizzBuzz(number) {
//   if (number % 5 === 0 && number % 3 === 0) {
//     return "FizzBuzz";
//   } else if (number % 5 === 0) {
//     return "Fizz";
//   } else if (number % 3 === 0) {
//     return "Buzz";
//   } else {
//     return number;
//   }
// }
// // generate from 1-1000
// var numbers = [];
// console.log(numbers);
// for (var i = 1; i <= 1000; i++) {
//   numbers.push(i);
// }
// // console.log(numbers);

// var fizzbuzzes = numbers.map(function (value) {
//   return getFizzBuzz(value);
// });
// console.log(fizzbuzzes);

// // Generate 100 random numbers between 1 to 1024
// var numbers = [];
// function getRandomNumber() {
//   var pseudoRandom = Math.random();
//   var minimumLimit = 1;
//   var maximumLimit = 1024;
//   var randomNumber = pseudoRandom * maximumLimit;
//   var finalNumber = Math.floor(randomNumber) + minimumLimit;
//   return finalNumber;
// }
// for (var i = 1; i <= 100; i++) {
//   var random = getRandomNumber();
//   numbers.push(random);
// }
// console.log(numbers);
// // to get fizzbuzz
// var fizzbuzzes = numbers.map(function (value) {
//   return getFizzBuzz(value);
// });
// console.log(fizzbuzzes);

const numbers = [];
for (var i = 1; i <= 100; i++) {
  console.log("checking through the number");
  if (i % 2 === 0) {
    numbers.push(i);
    continue;
  }
  if (i > 10) {
    console.log(i);
    break;
  }
  console.log("Done checking through the number");
}

const number = [];
number[100] = 20;
console.log(number);
