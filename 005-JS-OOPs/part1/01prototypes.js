let computer = { cpu: 12 };
let lenovo = { screen: "HD" };
let dell = {
    screen: "8k",
    __proto__: computer,
};
let tomHardware = {};

console.log(`Computer `, computer.__proto__);
console.log(`Lenovo `, lenovo.__proto__);
console.log(`dell `, dell.__proto__);

// Real Example

let genericCar = { tyres: 4 };
let tesla = {
    driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);

console.log(`GenericCar `, genericCar.__proto__);
console.log(`Tesla `, tesla.__proto__);
console.log(`Tesla`, Object.getPrototypeOf(tesla));
