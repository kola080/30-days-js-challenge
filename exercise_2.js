// exercise 2
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

let previousSkills = 0;
let mostSkilledUser;
const loggedInUsers = [];
const usersGreaterFifty = [];
const MERN = ["MongoDB", "Express", "React", "Node"];
const MERNSTACKERS = [];
for (let i in users) {
  const skills = users[i].skills;
  const isLoggedIn = users[i].isLoggedIn;
  const points = users[i].points;
  if (skills.length > previousSkills) {
    previousSkills = skills.length;

    mostSkilledUser = i;
  }
  if (isLoggedIn === true) {
    loggedInUsers.push(i);
  }
  if (points >= 50) {
    usersGreaterFifty.push(i);
  }
  if (
    skills.includes(MERN[0]) &&
    skills.includes(MERN[1]) &&
    skills.includes(MERN[2]) &&
    skills.includes(MERN[3])
  ) {
    MERNSTACKERS.push(i);
  }
}

// console.log("The most Skilled user is " + mostSkilledUser);
// console.log("The users logged in are " + loggedInUsers);
// console.log("The users with greater point than 50 are " + usersGreaterFifty);
// console.log("The MERN stack users are " + MERNSTACKERS);

// previousSkills = Math.max(previousSkills, skills.length)

users.Kola = {
  email: "kola@kola.com",
  skills: ["HTML", "CSS", "JavaScript", "React", "Node"],
  age: 21,
  isLoggoedIn: false,
  points: 40,
};
// console.log(users);

// to get the keys of the object
// const keys = [];
// for (i in users) {
//   keys.push(i);
// }
// console.log(keys);
// second method
const objectKeys = Object.keys(users);
// console.log(keys);

// to get all keys and all values
const array = [];
const keys = [];
const values = [];
for (let i in users) {
  keys.push(i);
  values.push(users[i]);
}
// console.log(keys);
// console.log(values);
// array.push(keys);
// array.push(values);
// console.log(array);

Object.values(users);
Object.entries(users);
