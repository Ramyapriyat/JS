let age = 25;
console.log(age);
let year = 2019
console.log(year)
age = 30
console.log(age, year);
const points = 300
console.log(points);
//points = 400
//console.log(points);
//var score = 75
//console.log(score);
//var - in usage before let and const
//data types
/* 
number
string
boolean
null\
undefined
object
model*/

//string examples

let fname = 'Ramya';
let lname = 'Priya';
let fullName = fname+lname;
console.log(fullName);
//methods - ARE FUNCTIONS THAT BELONGS TO SPECIFIC OBJECT TYPES
console.log(fullName.length);
console.log(fullName.toUpperCase());

//console.log(email);
console.log(fullName.toLowerCase());


//to find the last index of a letter in a string
let email = "ramya.t@ishafoundation.org";
let result = email.lastIndexOf('o');
console.log(result);

//Slice a section from a string
let string1 = "Ramya Priya";
let slice1 = string1.slice(0,5);
console.log(slice1);

let slice2 = string1.substring(6,11);
console.log(slice2);

//numbers
// area of a circle
let radius = 10;
const pi = 3.14;
console.log(radius,pi);
let area1 = pi*radius**2;
console.log(area1);

//template strings
const title = 'Best Reads of 2019';
const author = 'Mario';
const likes = 30;
//concatenation way

//
//let result1 = 'the blog called'+ title + 'by author' + 'has' + likes + 'likes';
//console.log(result1);

//template literal - template string way
//let result1 = `The blog ${title} called by ${author} has ${likes}likes`;
//console.log(result1);

//Creating html templates
let html = 
<h2> ${title} </h2>
<p> By ${author} </p>
<span> This blog has ${likes} likes </span>
;
console.log(html);









