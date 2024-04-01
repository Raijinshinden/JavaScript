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

let age = 25;
let price = 10.99;
let gpa = 2.1;


let firstname = "Ryan";
let lastName = "Dempsey";
let favoriteFood = "pizza";
let email = "ryan911@googleplex.com";

//Using a template literal, we can insert a variable using a placeholder.
console.log(`You are ${age} years old.`);
console.log(`The price is $${price}.`);
console.log(`Your gpa is: ${gpa}`);

//If we need to display the datatype of a variable, we can use console.log(), and precede the variable with the type of keyword.
console.log(typeof price);
console.log(typeof age);
console.log(typeof gpa);

console.log(typeof firstname);
console.log(`Your name is ${firstname}.`);
console.log(`You like ${favoriteFood}.`);
console.log(`Your email is ${email}`);