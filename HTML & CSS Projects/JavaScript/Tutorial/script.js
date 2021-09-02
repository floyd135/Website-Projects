//JavaScript Tutorial

//How to output in JS (console.log)
console.log("This is a log from a dedicated JS File.");

//--------------------------------------

// Variable Declaration
var item;//Must begin with a letter and case sensitive
var item2;

item = 5;
item2 = 'Hello!';

var married = false, number = 30;

//--------------------------------------

//Array
var list = ["John", "Marie", "Sander",32,false];
//list.pop() list.push("") list.shift = Removes John list.unshift = Adds back John
//list.indexOf()

//--------------------------------------

//Objects = Collections of properties and methods
var person = new Object(), car = {};
person.name = "James";
person.age = 50;
person.height = 1.76;

person["name"] = "kirk";

person.car = {};

person.car.make = "Honda";

var human = {
  name: "Junior"
  ,
  age: 20
};

//--------------------------------------

//Operator Same as normal

//If-Else Statement same as normal

//Loops same as normal

//--------------------------------------
//Functions
function printToConsole(message) {
  console.log(message);
}

printToConsole("Hello!");


var x = 3;
function test1(){
  var y = 5;
  
  console.log(y);
}

function test2(){
  var x = 10;

  console.log(x);
}

test1();
console.log(x);

//--------------------------------------
//Selectors give you access to DOM
/*
var firstItem = document.getElementById(""),
  myList = document.getElementsByTagName(""),
  paragraphs = document.getElementsByTagName(""),
  images = document.querySelectorAll("");

firstItem.style.color = "Red"; //Can change the style like in CSS
*/
//--------------------------------------
//Events - Triggered by the browser or by the user
var submitBtn = document.getElementById("submit"),
  container = document.querySelector(".container");

submitBtn.addEventListener("click", function(event) {
  console.log("Hey, I've been clicked");
} );

function mouseEnterContainer() {
  console.log("Hey, there was a mouseenter event triggered!");
}

container.addEventListener("mouseenter", mouseEnterContainer);

document.addEventListener("keyup", function(event){
  console.log(event.keyCode);
});