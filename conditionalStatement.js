var amount = parseInt(prompt("how much do you have"));
var azul = 35000;
var fanta = 200;
var coke = 5000;
// if (amount >= azul) {
//   console.log("You can afford azul");
// } else {
//   if (amount >= coke) {
//     console.log("you can afford coke");
//   } else {
//     console.log("you can afford fanta");
//   }
// }
// if (amount >= azul) {
//   console.log("you can afford azul");
// } else if (amount >= coke) {
//   console.log("you can afford coke");
// } else if (amount >= fanta) {
//   console.log("you can afford fanta");
// } else {
//   console.log("shey you go like water?");
// }
console.log(amount);
// console.log(typeof amount);

switch (amount) {
  case azul:
    console.log("you can afford azul");
    break;
  case coke:
    console.log("you can afford coke");
    break;
  case fanta:
    console.log("you can afford fanta");
    break;
  default:
    console.log("you cant afford a drink");
}
