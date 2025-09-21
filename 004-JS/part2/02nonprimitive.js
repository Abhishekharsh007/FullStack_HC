const username = {
  "first name": "abhishek",
  isLoggedin: true,
};

username.firstname = "Mr. A";
username.lastname = "harsh";

console.log(username["first name"]);
console.log(username.lastname);
console.log(username);
console.log(typeof username);

// Date
let today = new Date();
console.log(today.getDate());

// Array
let anotherUser = ["abhishek", true];
console.log(anotherUser[0]);

let isValue = "2abc";
console.log(typeof Number(isValue));
console.log(Number(null));
