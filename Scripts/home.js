/*Author Name= Rajvinder Singh Yogi
Student Number=200353207
Website= Mini-portfolio
File Name= home.js
This file includes all the styling properties which makes this website attractive and Improve the design

-----------------------------------------------------------------------------------------------------------*/

// JAVA Script Here

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