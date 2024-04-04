//console.log(`Hello`);
//console.log(`I like Pizza!`);

//window.alert(`This is an alert!`);
//window.alert(`I like Pizza!`);

//document.getElementById("myH1").textContent = "Hello"; //We first have to select the element, then change the text content.
//document.getElementById("myP").textContent = "I like pizza!"; //We first have to select the element, then change the text content.

//This is a comment

/* 
This 
is 
a 
multi-line
comment
*/

//Variables = A container that stores a value.
//Behaves as if it were the value it contains.

//There are two steps to creating a variable.
//1. declaration     let x;
//2. assignment      x = 100;

//let age = 25;
//let price = 10.99;
//let gpa = 2.1;


//let firstname = "Ryan";
//let lastName = "Dempsey";
//let favoriteFood = "pizza";
//let email = "ryan911@googleplex.com";

//Using a template literal, we can insert a variable using a placeholder.
//console.log(`You are ${age} years old.`);
//console.log(`The price is $${price}.`);
//console.log(`Your gpa is: ${gpa}`);

//If we need to display the datatype of a variable, we can use console.log(), and precede the variable with the type of keyword.
//console.log(typeof price);
//console.log(typeof age);
//console.log(typeof gpa);

//console.log(typeof firstname);
//console.log(`Your name is ${firstname}.`);
//console.log(`You like ${favoriteFood}.`);
//console.log(`Your email is ${email}`);

//let online = true;
//let forSale = false;

//console.log(`Bro is online: ${online}`);
//console.log(`Is this car for sale: ${forSale}`);


//let fullName = "Ryan Dempsey";
//let age = 27;
//let isStudent = false;

//To change the text content of an html element.

//document.getElementById("p1").textContent = `Your name is ${fullName}`;
//document.getElementById("p2").textContent = `You are ${age} years old`;
//document.getElementById("p3").textContent = `Enrolled in school: ${isStudent}`;

//Arithmetic Operators

//let students = 30;

//students = students + 1;
//students = students - 1;
//students = students * 1;
//students = students / 1;
//students = students ** 2; This is an exponent (to the power of 2).
// let extraStudents = students % 2; This is the modulus operator (returns the remainder of a division).

//Augmented assignment operators
//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;

//To increase a variable by only 1;
//students++;
//students--;

//operator precedence; (solving in order from left to right);
//1. parenthesis ()
//2. exponents
//3. multiplication, division, modulo
//4. addition & subtraction

//Ex: 1 + 2 * 3 + 4 ** 2 = 23;


//How to accept user input.
//1. Easy way = window prompt
//2. Professional way = HTML textbox

//let username;

//Get user to input their username with a window prompt.
//username = window.prompt("What's your username?"); 

//console.log(username);

//Get user to input their username with an HTML textbox

//Everything we write in the curly braces is what will be done when we click on the button.

/*
let username;

//document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}.`
};
*/

//Type Conversion
//Changing the datatype of a value to another.
//(strings, numbers, booleans)

/*
let age = window.prompt("How old are you?");

age = Number(age);
age+=1;

console.log(age, typeof age);
*/

/*

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

*/

//Const = a variable that can't be changed;

/*

const PI = 3.14159; //uppercasing const variable name is common with numbers and booleans, but not usually done with string values.
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
};

*/

//Math - built-in object that provides a
//       collection of properties and methods.

//console.log(Math.PI);

//Math gives us access to a lot of useful math related methods.
/*
let x = 3.21;
let y = 2;
let z;

z = Math.round(x);
*/

// We also Math.floor(), which will always round the number down to it's
//nearest integer.

//Math.ceil, will always round the number up to the nearest
// integer.

// Truncate will get rid of any decimal points.

// z = Math.trunc(x); This would return 3.

//To raise a base to another given number we can use 
//the (.pow) method.

//Ex: z = Math.pow(x, y); This equals x to the power of y.

//Math.sqrt = How to get a square root.

//To find the absolute value of a number, we can use the absolute value function.
//Math.abs;


//IF Statements = if a condition is true, execute some code
//                if not, do something else.
/*
let age = 25;

if(age >= 18) {
    console.log("You are old enough to enter this site.")
}else{
    console.log("You must by 18+ to enter this site.")
}


let time = 9;

if(time < 12) {
    console.log("Good Morning.")
}else{
    console.log("Good Afternoon.")
}

*/
/*
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);

    if(age >= 100){
        resultElement.textContent = `You are TOO OLD to enter this site.`;
    }
    else if(age == 0){
        resultElement.textContent = `You were LITERALLY just born.`;
    }
    else if(age >= 18){
        resultElement.textContent = `You are old enough to enter this site.`;
    }
    else if(age < 0){
        resultElement.textContent = `Your age can't be below 0.`;
    }
    else{
        resultElement.textContent = `You must be 18+ to enter this site.`;
    }
}
*/

//.checked = property that determines the checked state of an
//           HTML checkbox or radio button element.

/*
const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {
    if(myCheckbox.checked){
        subResult.textContent = `You are subscribed!`;
    }
    else{
        subResult.textContent = `You are NOT subscribed!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa.`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `You are paying with MasterCard.`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `You are paying with PayPal.`;
    }
    else{
        paymentResult.textContent = `You must select a payment type.`;
    }
}
*/

//ternary operator = a shortcut to if() and else() statements
//                   helps to assign a variable based on a condition
//                   condition ? codeIfTrue : codeIfFalse;

//let age = 21;
//let message = age >= 18 ? "You're an adult" : "You're a minor";
//console.log(message);

//let time = 16;
//let greeting = time < 12 ? "Good Morning!" : "Good Afternoon";
//console.log(greeting);

//SWITCH = can be an efficient replacement to many if statements;

/*
let day = 1;

switch(day){
    case 1:
        console.log("It is Monday.");
        break;
    case 2:
        console.log("It is Tuesday.");
        break;
    case 3:
        console.log("It is Wednesday.");
        break;
    case 4:
        console.log("It is Thursday.");
        break;
    case 5:
        console.log("It is Friday.");
        break;
    case 6:
        console.log("It is Saturday.");
        break;
    case 7:
        console.log("It is Sunday.");
        break;
    default:
        console.log(`${day} is not a day.`);
}

let testScore = 92;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}
*/

// string methods = allow you to manipulate and work with text (strings);

/*
let userName = "Raichu911";

console.log(userName.charAt(0)); //Get the character at a certain index;

console.log(userName.indexOf("a"));//Where does this code first appear in the code;

console.log(userName.lastIndexOf("a"));//Where is the last index that this character appears at;

console.log(userName.length);//Just returns the length of the string it is attached to.

console.log(userName.trim());//For getting rid of white spaces;

console.log(userName.toUpperCase());//Changes all characters to uppercase

console.log(userName.toLowerCase());//Changes all characters to lowercase

*/
/*
//string slicing = creating a substring
//                 from a portion of another string.

//                 string.slice(start, end);

const fullName = "Ryan Dempsey";

//let firstName = fullName.slice(0, 4);
//let lastName = fullName.slice(5, 12);

//let firstCharacter = fullName.slice(0, 1);
//let lastCharacter = fullName.slice(-1);

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);//If we don't add the +1, it will include the space at the beginning of our last name.

console.log(firstName);
console.log(lastName);
*/

//Method Chaining = Calling one method after another
//                  in one continuous line of code.

// ----- NO METHOD CHAINING -----
/*
let username = window.prompt("Enter your username: ");

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username);
*/
// ----- METHOD CHAINING -----
/*
let username = window.prompt("Enter your username: ");
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username)
*/

//Logical operators = used to combine or manipulate boolean values
//                    (true or false)

//                     AND &&
//                     OR ||
//                     NOT !
/*
const temp = 20;

if(temp > 0 && temp <= 30){
    console.log("The weather is GOOD");
}
else{
    console.log("The weather is BAD");
}

if(temp <= 0 || temp > 30){
    console.log("The weather is BAD");
}
else{
    console.log("The weather is GOOD");
}

const = isSunny = true;

if(!isSunny){
    console.log("It is CLOUDY");
}
else{
    console.log("It is SUNNY");
}
*/

// while loops = repeat some code WHILE some condition is true

/*
let username = "";

while(username === "" || username === null){
    username = window.prompt("Enter your name: ")
}

console.log(`Hello ${username}`);
*/

// Do-while loop

/*
let username = "";

do{
    username = window.prompt("Enter your name: ");
}while(username === "" || username === null)

console.log(`Hello ${username}`);
*/

// for loops = repeat some code a LIMITED amount of times
/*
for(let i = 0; i <= 10; i++){ // if we want to increment by a different number value, we can use += instead of ++;
    console.log(i);
}
*/

/*
for(let i = 1; i <= 20; i++){
    
    if(i == 13){
        continue; // continue will skip this part of the loop;
    }
    else{
        console.log(i);
    }
}
*/
/*
for(let i = 1; i <= 20; i++){
    
    if(i == 13){
        break; // break will brea out of the loop entirely;
    }
    else{
        console.log(i);
    }
}
*/

// function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute that code.

/*
function happyBirthday(username, age){ // parameter order is important;
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${username}!`); // uses parameter;
    console.log("Happy Birthday to you!");
    console.log(`You are ${age} years old.`); // uses parameter;
}

happyBirthday("Ryan", 28);
*/

/*
function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

let answer = add(2, 3); // when we return something from a function, think of it becoming what was returned;
console.log(answer);
*/
/*
function isEven(number){
    
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isEven(666));

function isEven(number){ //Example using ternary operator
    
    return number % 2 === 0 ? true : false;
}
*/

/*
function isValidEmail(email){

    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}
*/

// variable scope = where a variable is recognized
//                  and accessible (local vs global)

// Any variable declared in a funtion has local scope, 
//so you can have multiple funtions with the same variable names.

//Functions can't see inside other functions.

//Any variable declared outside of a function has global scope,
//it can be used all throughout the program.

/*
// array = a variable like structure that can hold
//         more than 1 value

//let fruits = ["apple", "banana", "orange"];

//console.log(fruits[0]);
//console.log(fruits[1]);
//console.log(fruits[2]);

//fruits.push("coconut") //Pushes value to end of array.
//fruits.pop() //Pops value from end of array.
//fruits.unshift("mango") //Adds value to beginning of array.
//fruits.shift() //Removes value from start of array.

//let numOfFruits = fruits.length; //To get the length of the array.
// let index = fruits.indexOf("apple"); //To get the index of an item in the array.
*/


/*
// spread operator = ... allows an iterable such as an
//                   array or string to be expanded
//                   into seperate elements
//                   (unpacks the elements)

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);
console.log(minimum);
*/


//rest parameters = (...rest) allow a function work with a variable
//                  number of arguments by bundling them into an array

//                  spread = expands an array into seperate elements
//                  rest = bundles seperate elements into an array
/*
function openFridge(...foods){
    console.log(foods);
}

function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

//openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);
*/


// callback = a function that is passed as an argument
//            to another function.

//            used to handle asynchronous operations:
//            1. Reading a file
//            2. Network requests
//            3. Interacting with databases

//            "Hey, when you're done, call this next."
/*
hello(wait);


function hello(callback){
    console.log("Hello");
    callback();
}

function wait(){
    console.log("Wait!");
}

function leave(){
    console.log("Leave!");
}

function goodbye(){
    console.log("Goodbye");
}


sum(displayConsole, 1, 2)

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}
*/

// forEach() = method used to iterate over the elements
//             of an array and apply a specified function (callback)
//             to each element.

//             array.forEach(callback)
//             element, index, array are provided


/*
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(cube);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}

function triple(element, index, array){
    array[index] = element * 3;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

function cube(element, index, array){
    array[index] = Math.pow(element, 3);
}

function display(element){
    console.log(element);
}

*/


// .map() = accepts a callback and applies that function
//          to each element of an array, then return a new array

// It's very similar to the forEach() method, however it returns
// a new array, which is a key difference.

/*
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(squares);
console.log(cubes);

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}

const students = ["Spongebob", "Patrick", "Squidward", "Rick James"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsUpper)
console.log(studentsLower)

function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}
*/

// .filter() = creates a new array by filtering
//             out elements
/*
let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums)
console.log(oddNums)

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}


const ages = [16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);

console.log(adults);
console.log(children);

function isAdult(element){
    return element >= 18;
}

function isChild(element){
    return element < 18;
}
*/


// .reduce() = reduce the elements of an array
//             to a single value

/*
const prices = [5, 6, 2, 10, 30, 50];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`)

function sum(accumulator, element){
    return accumulator + element;
}


const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum)
console.log(minimum)

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}

*/

// function declaration = define a reusable block of code
//                        that performs a specific task
/*
function hello1(){
   console.log("Hello");
}

// function expression = a way to define functions as
//                       values or variables

const hello = function(){
    console.log("Hello");
}

hello();


setTimeout(function(){
    console.log("HelloS");
}, 3000);
*/


// arrow functions = a concise way to write function expressions
//                   good for simple functions that you use only once
//                   (parameters) => some code
/*
function hello(){
    console.log("Hello");
}

//
const hello = (name, age) => {console.log(`Hello ${name}`)
                              console.log(`You are ${age} years old. That's hella old fam.`)};

hello("Ryan", 27);

setTimeout(() => console.log("Hello"), 3000);

//
const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);
*/

// JavaScript objects = A collection of related properties and/or methods
//                      Can represent real world objects (people, products, places)
//                      object = {key:value,
//                                function()}

/*
const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I'm Spongebob")},
    eat: function(){console.log("I'm eating a Krabby Patty.")}
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: function(){console.log("Ahahaha, He got hit in the head with a coconut")},
    eat: () => console.log("I'm eating roast beef, a chicken, some pizza, ....")
}

person1.sayHello();
person2.sayHello();
person1.eat();
person2.eat();

*/


// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name

/*
const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function(){console.log(`Hi, I'm ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}.`)}
}

const person2 = {
    name: "Patrick",
    favFood: "pizza",
    sayHello: function(){console.log(`Hi, I'm ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}.`)}
}

person1.eat();
person2.eat();
*/

// constructor = special method for defining the
//               properties and methods of objects