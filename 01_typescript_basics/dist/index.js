"use strict";
// Example of explicitly assigned a type to a variable.
let age = 30;
let firstName = "Mark";
let isfictional;
// Typescript automatically sets the type. Trying to reassign a variable to a different type will throw an error.
let planet = "Earth";
let moons = 1;
let isLarge = false;
// The same stands with null & undefined. If the type is set they can't be reassined with another type such as a string.
let something;
let anotherThing;
// ARRAYS
// Array type set to strings
let names = ["Mark", "Ellen", "Jimmy"];
let ages = [25, 28, 24];
names.push("Boab");
ages.push(42);
console.log(names, ages);
let fruits = ["Apples", "Pears", "Bananas", "Mangos"];
const fruit = fruits[2];
console.log(fruit);
let things = [1, true, "Hello"];
// Typescript doesn't assign a type as the things array has many types
const t = things[0];
// OBJECT LITERALS
let user = {
    firstName: "Mark",
    age: 32,
    id: 1,
};
user.firstName = "Boab";
console.log(user);
let person = {
    name: "Luigi",
    score: 35,
};
const score = person.score;
console.log(score);
// FUNCTIONS
// Assigning a type to the arguments. Assigning a type after arguments tells typescript what value the function should return.
function addTwoNumbers(a, b) {
    return a + b;
}
const sum = addTwoNumbers(5, 5);
console.log(sum);
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
const sum2 = subtractTwoNumbers(5, 3);
console.log(sum2);
let numbersArray = [1, 5, 10, 3];
function addAllNumbers(items) {
    return items.reduce((a, c) => a + c, 0);
}
const sumOfArray = addAllNumbers(numbersArray);
console.log(sumOfArray);
const greeting = (name, greeting) => {
    console.log(`${greeting}, ${name}.`);
};
greeting("Mark", "Hello!");
// TUPLES
// Tuples are like an array but are set in a specific order.
let person2 = ["Mark", 32, true];
console.log(person2);
let hsla;
hsla = [200, "100%", "50%", 1];
console.log(hsla);
// Named Tuple
let user2;
user2 = ["Mark", 32];
console.log(user2[0]);
console.log(user2);
const authorOne = { name: "Mario", avatar: "/img/mario.png" };
const newPost = {
    title: "my first post",
    body: "this is the post body",
    tags: ["learning", "finance"],
    createdAt: new Date(),
    author: authorOne,
};
console.log(newPost);
function createPost(post) {
    console.log(`Created post ${post.title} by ${post.author.name}.`);
}
createPost(newPost);
let posts = [];
posts = [newPost];
console.log(posts);
function getRandomColour() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colourOne = getRandomColour();
const colourTwo = getRandomColour();
console.log(colourOne);
console.log(colourTwo);
// type User = {
//   name: string;
//   score: number;
// };
const userOne = { name: "Mark", score: 34 };
function formatUser(user) {
    console.log(`${user.name} has a score of ${user.score}`);
}
formatUser(userOne);
// UNION TYPES
//Union types are used when a value can be more than a single type. Such as when a property would be string or number.
let someId;
someId = 9;
someId = "Mark";
let email = null;
email = "hello@markslorach.com";
email = null;
function swapIdType(id) {
    if (typeof id === "string") {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType("2");
console.log(idOne, idTwo);
function logDetails(value) {
    if (value.type === "user") {
        console.log(value.email, value.username);
    }
    if (value.type === "person") {
        console.log(value.firstName, value.age);
    }
}
