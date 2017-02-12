/*Author Name= Rajvinder Singh Yogi
Student Number=200353207
Website= Mini-portfolio
File Name= contact.js
This file includes all the styling properties which makes this website attractive and Improve the design

-----------------------------------------------------------------------------------------------------------*/

// JAVA Script Here*
"use strict";
(fuction(){

console.info("Page Title: " + document.title);

// Contact page heading
let ContactMe = document.getElementById("ContactMe");
let myHeading="Contact Me";
ContactMe.textContent=myHeading;


let submit_btn =document.getElementById("submit");

submit_btn.addEventListener("Click", fuction(event){
event.preventDefault();

});

})();
