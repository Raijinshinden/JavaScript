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

/*
function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`You drive the ${this.model}.`)}
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
const car3 = new Car("Dodge", "Charger", 2026, "Silver");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive()

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
car3.drive();
*/

// class = (ES6 feature) provides a more structured and cleaner way to 
//          work with objects compared to traditional constructor functions
//          ex. static keyword, encapsulation, inheritance.

/*
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`)
        console.log(`Price: $${this.price.toFixed(2)}`)
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const total = product2.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);
*/


// static = keyword that defines properties or methods that belong 
//          to a class itself rather than the objects created
//          from that class (class owns anything static, not the objects)

/*
class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));



class User{
    static userCount = 0;

    constructor(userName){
        this.userName = userName;
        User.userCount++;
    }
    
    static getUserCount(){
        console.log(`There are ${User.userCount} users online.`);
    }
    sayHello(){
        console.log(`Hello, my username is ${this.userName}`)
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();
*/

// inheritance = allows a new class to inherit properties and methods
//               from an existing class (parent -> child)
//               helps with code reusability

/*
class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`)
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`)
    }
}

class Rabbit extends Animal{
    name = "rabbit";

    run(){ //This method can only be used by the rabbit.
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal{
    name = "fish";

    swim(){ //This method can only be used by the fish.
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal{
    name = "hawk";

    fly(){ //This method can only be used by the hawk.
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabbit.eat();
rabbit.sleep();

*/

// super = keyword is used in classes to call the constructor or
//         access the properties and methods of a parent (superclass)
//         this = this object
//         super = the parent

/*
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}Kmph`)
    }
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run.`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim.`);
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly.`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("Efram", 1, 25);
const fish = new Fish("Steve", 2, 12);
const hawk = new Hawk("Randy", 3, 50);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

rabbit.run();
*/

// getter = special method that makes a property readable
// setter = special method that makes a property writtable

// validate and moodify a value when reading/writting a property

/*
class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth
        }
        else{
            console.error("Width must be a positive number.");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height must be a positive number.");
        }
    }

    get width(){
        return `${this._width.toFixed(1)}cm`;
    }

    get height(){
        return `${this._height.toFixed(1)}cm`;
    }

    get area(){
        return `${(this._width * this._height).toFixed(1)}cm`;
    }
}

const rectangle = new Rectangle(3, 4);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
*/

// destructuring = extract values from arrays and objects,
//                 then assign them to variables in a convenient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring
//                  5 examples

/*
// Ex 1 //
// Swap the value of two variables //

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

// Ex 2 //
// Swap 2 elements in an array //

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);

// Ex 3 //
// Assign array elements to variables //

const colors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);


// Ex 4 //
// Extract values from objects //

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "fry cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

const {firstName, lastName, age, job = "Unemployed"} = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// Ex 5 //
// Destructure in function parameters //

function displayPerson({firstName, lastName, age, job="Unemployed"}){ //If there is no value for a parameter, we can add a default one with = //
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "fry cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}

displayPerson(person1);
*/

// nested objects = Objects inside of other Objects.
//                  Allows you to represent more complex data structures
//                  Child Object is enclosed by a Parent Object

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}
/*
const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 Conch St",
        city: "Bikini Bottom",
        country: "Int. Waters"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[2]);
console.log(person.address.country);

for(const property in person.address){
    console.log(person.address[property]);
}


class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch St", 
                          "Bikini Bottom", "Int. Waters");

const person2 = new Person("Patrick", 37, "128 Conch St", 
                          "Bikini Bottom", "Int. Waters");

const person3 = new Person("Squidward", 45, "126 Conch St", 
                          "Bikini Bottom", "Int. Waters");



// Array of Objects //

const fruits =[{name: "apple", color: "red", calories: 95},
               {name: "orange", color: "orange", calories: 45},
               {name: "banana", color: "yellow", calories: 105},
               {name: "coconut", color: "white", calories: 159},
               {name: "pineapple", color: "yellow", calories: 37}];


// forEach: to loop through the elements of the array //

//fruits.forEach(fruit => console.log(fruit.name));

// map(): will run each element through a function and return a new array.//

const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

// console.log(fruitNames);
// console.log(fruitColors);
// console.log(fruitCalories);

// filter(): will return a new array after using each element and checking a condition.

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

// console.log(yellowFruits);
// console.log(lowCalFruits);
// console.log(highCalFruits);

// reduce(): will return a single value, in this case an object.

const maxFruit = fruits.reduce((max, fruit) => 
                              fruit.calories > max.calories ?
                              fruit : max);

const minFruit = fruits.reduce((min, fruit) => 
                              fruit.calories < min.calories ?
                              fruit : min);

console.log(maxFruit);
console.log(minFruit);
*/

// sort() = method used to sort elements of an array in place.
//           Sorts elements as strings in lexicographic order, not alphabetical
//           lexicographic = (alphabet + numbers + symbols) as strings

// let numbers = [1, 10, 4, 7, 2, 9, 8, 3, 5, 6];

// numbers.sort((a, b) => a - b);

// console.log(numbers);
/*
const people = [{name: "Spongebob", age: 30, gpa: 3.6},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}]

people.sort((a, b) => a.age - b.age); // For reverse order, just switch the values around //
people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);

*/

// Shuffle an Array //
/*
const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
shuffle(cards);
console.log(cards);

// Fisher - Yates Algorithm // 

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]];
    }
}
*/

// Data Objects = Objects that contain values that represent dates and times
//                These date objects can be changed and formatted.
/*
// Date(year, month, day, hour, minute, second, ms)
const date = new Date();

// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minute = date.getMinutes();
// const seconds = date.getSeconds();
// const dayOfWeek = date.getDay();

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minute);
// console.log(seconds);
// console.log(dayOfWeek);

date.setFullYear(2024);
date.setMonth(3);
date.setDate(7);
date.setHours(1)
date.setMinutes(31);
console.log(date);
*/

// Closure = A function defined inside of another function,
//           the inner function has access to the variables
//           and scope of the outer function.
//           Allow for private variables and state maintenance
//           Used frequently in JS frameworks: React, Vue, Angular

// function outer(){

//     let message = "Hello";

//     function inner(){
//         console.log(message);
//     }
//     inner()
// }

// outer();

// function createCounter(){

//     let count = 0;

//     function increment(){
//         count++;
//         console.log(`Count increased to ${count}`);
//     }

//     function getCount(){
//         return count;
//     }

//     return {increment, getCount};
// }

// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`The current count is ${counter.getCount()}`)

// function createGame(){
//     let score = 0;

//     function increaseScore(points){
//         score += points;
//         console.log(`+${points}pts`)
//     }
    
//     function decreaseScore(points){
//         score -= points;
//         console.log(`-${points}pts`)
//     }
    
//     function getScore(){
//         return score;
//     } 

//     return {increaseScore, decreaseScore, getScore};
// }

// const game = createGame();

// game.increaseScore(8);
// game.increaseScore(2);
// game.decreaseScore(2);
// console.log(`The final score is ${game.getScore()}pts`);

// setTimeout() = function in javaScript that allows you to schedule
//                the execution of a function after an amount of time (milliseconds)
//                Times are approximate (varies based on the workload of the JavaScript runtime env.)

//                setTimeout(callback, delay);
//                clearTimeout(timeoutId) = can cancel a timeout before it triggers

//const timeoutId = setTimeout(function(){window.alert("Hello")}, 3000);

//setTimeout(() => window.alert("Hello"), 3000);

//clearTimeout(timeoutId);

// let timeoutId;

// function startTimer(){
//     timeoutId = setTimeout(() => window.alert("Hello"), 3000);
//     console.log("Started");
// }

// function clearTimer(){
//     clearTimeout(timeoutId);
//     console.log("Cleared");
// }

// ES6 Module = An external file that contains reusable code
//              that can be imported into other JavaScript files.
//              Write reusable code for many different apps.
//              Can contain variables, classes, functions, ... and more
//              Introduced as part of ECMAScript 2015 update


// synchronous = Executes line by line consecutively in a sequential manner
//               Code that waits for an operation to complete

// asynchronous = Allows multiple operations to be peformed concurrently without waiting
//                Doesn't block the execution flow and allows the program to continue
//                (I/O operations, network requests, fetching data)
//                Handled with: Callbacks, Promises, Async/Await


// Error = An Object that is created to represent a problem that occurs
//         Occur often with user input or establishing a connection

// try { } = Encloses coe that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
//               ex. close files, close connections, release resources

// DOM = Document Object Model
//       Object() that represents the page you see in the web browser
//       and provides you with an API to interact with it.
//       Web browser constructs the DOM when it loads an HTML document,
//       and structures all the elements in a tree-like representation.
//       JavaScript can access the DOM dynamically
//       change the content, structure, and style of a web page.


// element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)

//1. document.getElementById()       // Element or Null
//2. document.getElementsByClassName // HTML Collection
//3. document.getElementsByTagName   // HTML Collection
//4. document.querySelector()        // Element or Null
//5. document.querySelectorAll()     // Nodelist

const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = 