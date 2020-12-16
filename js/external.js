"use strict";

alert("Welcome to my Website!");

var color = prompt("What is your favorite color?");
alert("Great, " + color + " is my favorite color too!");

// Gathering information from user to calculate total rental cost on each movie.
var littleMermaidRentalDays = prompt("How many days for Mermaid rental?" );
var brotherBearRentalDays = prompt("How many days for Bear rental?" );
var herculesRentalDays = prompt("How many days for Hercules rental?" );
var MoviePrice = 3;

//variable holding total rental cost just like a calculator
var totalRentalCost =
    MoviePrice * littleMermaidRentalDays +
    MoviePrice * brotherBearRentalDays +
    MoviePrice * herculesRentalDays;

// user gets final invoice.
alert("Your total rental cost is $" + totalRentalCost);


// fixed hourly rate from different employers
var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;

//submitting hours worked by user per company
var googleHours = prompt("How many hours did you work for Google?");
var amazonHours = prompt("How many hours did you work for Amazon?");
var facebookHours = prompt("How many hours did you work for Facebook?");

// Total Pay calculated across all employers for the week
var totalPay = (googleRate * googleHours) +
    (amazonRate * amazonHours) +
    ( facebookRate * facebookHours);

//user gets a display of how much earned for the week in total
alert("You made $"+ totalPay + " this week.");


// class available and schedule should be true to enrol
// first 2 variables will determine the enroll status in the third variable
// Hopefully to modify this section later for better output
var isClassAvailable = prompt("Is the class available?");
var isScheduleFree = prompt("Is your schedule free to take a class?");
var enrollStatus = (isClassAvailable == true) && (isScheduleFree == true);

// user gets the enrolment status as a true or false value
alert("Enrollment availability for a class: " + (enrollStatus));


// Offer is applied based on a few terms
var itemsPurchased = parseInt(prompt("How many items did you purchase?"));
var checkOfferValid = confirm("Click OK if your offer is valid");
var checkPremiumMember = confirm("Click OK if you are a premium member");

// code returns true if offer is applied and false if otherwise.
alert("offer applied: " +
    (checkOfferValid && (itemsPurchased > 2 || checkPremiumMember)));

;

function isUpperCase(str){
    return str.toUpperCase === str;
}