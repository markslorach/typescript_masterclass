"use strict";
const something = { quantity: 50 };
function printQuantity(item) {
    console.log(`The gauntity if the item is ${item.quantity}`);
}
const fruit = {
    name: "Mango",
    quantity: 50,
};
const vehicle = {
    type: "Car",
    quantity: 3,
};
const person = {
    name: "Mark",
    age: 32,
};
printQuantity(fruit);
printQuantity(vehicle);
// wont work as person object does not have a quantify property outlined by the interface
printQuantity(person);
