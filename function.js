// function add() {
//   console.log(2 + 13);
// }
// add();
var greeting = greet("Kola", 15);
console.log(greeting);
function greet(name, hour) {
  var message;
  if (hour < 12) {
    message = "Goodmorning";
    return message;
  } else {
    if (hour < 18) {
      message = "good-afternoon";
      return message;
    } else if (hour < 24) {
      message = "good-evening";
      return message;
    }
  }
}

var newGreet = function g(name, hour) {
  console.log("newGreet");
};
newGreet("Kola", 15);
