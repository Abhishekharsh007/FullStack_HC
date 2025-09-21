// Number
let balance = 120;
let anotherBalance = new Number(120);

console.log(balance);  // => 120
console.log(anotherBalance.valueOf());  // => 120

console.log(typeof balance);  // => number
console.log(typeof anotherBalance);  //=> object


// Boolean
let isActive = true;
let isReallyActive = new Boolean(true); // not recommended


// null and undefined
let firstname = null;
let lastname = undefined;

console.log(firstname);  // => null
console.log(lastname);  // => undefined


// string
let myString = "hello";
let myStringOne = "Hola";
let username = "abhishek";

let oldGreet = myString + " " + "abhishek";
console.log(oldGreet);  // => hello abhishek

let greetMessage = `Hello ${username} !`;
let demoOne = `Value is ${2 * 2}`;
console.log(demoOne);  // => Value is 4


// Symbol
let sm1 = Symbol("harsh");
let sm2 = Symbol("harsh");
console.log(sm1);  // => Symbol(harsh)
console.log(sm2);  // => Symbol(harsh)
