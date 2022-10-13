const student = {
  name: "ade",
  age: 18,
  ismale: false,
};
function getName(obj) {
  return obj.name;
}
function getAge(obj) {
  return obj.age;
}
function getGender(obj) {
  if (obj.ismale) {
    return "male";
  } else {
    return "female";
  }
}
const staff = {
  name: "tade",
  age: 25,
  ismale: true,
};
console.log(getGender(staff));
console.log(getAge(student));
