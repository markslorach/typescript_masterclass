// REUSABLE INTERFACES
interface hasQuantity {
  quantity: number;
}

const something: hasQuantity = { quantity: 50 };

function printQuantity(item: hasQuantity): void {
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
// printQuantity(person);

// FUNCTION SIGNATURES
// A function signature defines the input parameters and their types and also the expected return type for that function.

