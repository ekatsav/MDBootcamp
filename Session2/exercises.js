console.log("Good morning!!");

// creating a variable using the var keyword:
var myName = 8;
var goalsPerGame = 10;
var myName = 'Name';

// creating a variable using the let keyword:
let firstName = 'Bob';
console.log(firstName);
let interestRate = 1.4;
firstName = 'John';
console.log(firstName);

const name = 'John Doe';
console.log('Length of name', name.length);

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?'
const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);
console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// expected output: "The index of the first "dog" from the beginning is 40"
console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// expected output: "The index of the 2nd "dog" is 52"

const person = {
    name: 'John',
    age: 25
};
// we use the dot notation to extract each property:
console.log(person.name);
console.log(person.age);
// let's check the types of the person and properties:
console.log(typeof person);
console.log(typeof person.name);

const now = new Date();
console.log(now);

const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);

const lotteryNumbers = [9, 23, 44, 12, 8, 34];
console.log(lotteryNumbers);

const mixedArray = ["Efe", 12, 3.14, true];
console.log(mixedArray);

const users = [["Tobi", 18], ["Akin", 21], ["Dola", 20]];
console.log(users);

//use table to actually view the insides!!

console.table(users);

const todos = [
    { id: 1, text: "Prepare meeting agenda", isCompleted: true },
    { id: 2, text: "Send weekly report", isCompleted: false },
    { id: 3, text: "Organise desk", isCompleted: true }
];
console.table(todos);

console.log(todos[2].text); //organise desk

const fruits2 = new Map();
fruits2.set("Apple", { color: "Red", weight: "150g" });
fruits2.set("Banana", { color: "Yellow", weight: "120g" });
console.log(fruits2);
console.log(fruits2.get("Apple")); // {color: 'Red', weight: '150g'}
console.log(fruits2.has("Banana")); // true

console.table(fruits2);
