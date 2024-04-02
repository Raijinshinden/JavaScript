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

const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
