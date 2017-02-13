/*Author Name= Rajvinder Singh Yogi
Student Number=200353207
Website= Mini-portfolio
File Name= portfolio.js
This file includes all the styling properties which makes this website attractive and Improve the design

-----------------------------------------------------------------------------------------------------------*/

// JAVA Script Here
"use strict";
//IIFE 
(function(){


switch(document.title){
case"Biography::Raj Yogi":
// Name heading content to home page
var MyName = document.getElementById("MyName");
var myContent= "RAJVINDER SINGH YOGI";
MyName.textContent=myContent;

//Sub heading content to home page
var WebDeveloper = document.getElementById("WebDev");
var myContent="WEB DEVELOPER | BIOGRAPHY";
WebDev.textContent=myContent;


// Bio Paragraph content to home Page

//step1- create a reference to an element
var Biography = document.getElementById("BioPara");
//step2- create a variable that contain content
var myContent = "I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; I build websites that delight and inform. I do it well. I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand. I moved to Alberta from India a year ago; have been studying and learning the language at Gerogian College in Barrie for the time being.";
//step3- assign the variable with your content to the refrence variable
BioPara.textContent = myContent;
break;


case "Portfolio::Raj Yogi":
//project1 portfolio content starts
var headingProject1 = document.getElementById("headingProject1");
var ContentPortfolio="Live Website";
headingProject1.textContent=ContentPortfolio;

var subheadingProject1 = document.getElementById("subheadingProject1");
var ContentPortfolio="Broadway Animal Hospital";
subheadingProject1.textContent=ContentPortfolio;

var project1Para = document.getElementById("project1Para");
var ContentPortfolio="I designed this website in wordpress. Owner(my uncle) of website is a veterinarian and owns an animal clinic in Orangeville. This website has a service to book appointments online. This website helped Dr. Yogi to improve their business in many ways.";
project1Para.textContent=ContentPortfolio;
//project1 portfolio content ends

// -----------------------------------------------------------------------------------------------------------

//project2 portfolio content starts
var headingProject2 = document.getElementById("headingProject2");
var ContentPortfolio="Movie Poster";
headingProject2.textContent=ContentPortfolio;

var subheadingProject2 = document.getElementById("subheadingProject2");
var ContentPortfolio="Assignmet 1st Semester";
subheadingProject2.textContent=ContentPortfolio;

var project2Para = document.getElementById("project2Para");
var ContentPortfolio="This movie-poster was designed by me in previous semester using CSS and HTML. 'Scott Mcrindlle' guided me in this project. It has the link to original website of 'The Fast and Furious' movie. It helped me alot to learn new properties of CSS. ";
project2Para.textContent=ContentPortfolio;
//project2 portfolio content ends

// ----------------------------------------------------------------------------------------------------------------

//project3 portfolio content starts
var headingProject3 = document.getElementById("headingProject3");
var ContentPortfolio="Photography";
headingProject3.textContent=ContentPortfolio;

var subheadingProject3 = document.getElementById("subheadingProject3");
var ContentPortfolio="Exceptional Photography";
subheadingProject3.textContent=ContentPortfolio;

var project3Para = document.getElementById("project3Para");
var ContentPortfolio="I took this picture nearby Bell fountain. This picture is one of the finest Photography done by by me. It was a raining when I took this picture. This picture got reward from some professional photogrphers too. ";
project3Para.textContent=ContentPortfolio;
//project3 portfolio content ends
break;

case"Contact Me::Raj Yogi":

console.info("Page Title: " + document.title);

// Contact page heading
let ContactMe = document.getElementById("ContactMe");
let myHeading="Contact Me";
ContactMe.textContent=myHeading;


submit.addEventListener("click",function display(event){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let mobile = document.getElementById("mobile").value;
let message = document.getElementById("message").value;

event.preventDefault();

console.log(name);
console.log(email);
console.log(mobile);
console.log(message);

});

break;

}
})();


