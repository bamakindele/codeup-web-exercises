"use strict";

alert("Welcome to my Website!");

var color = prompt("What is your favorite color?");
alert("Great, " + color + " is my favorite color too!");

var littleMermaidRentalDays = prompt("How many days for Mermaid rental?" );
var brotherBearRentalDays = prompt("How many days for Bear rental?" );
var herculesRentalDays = prompt("How many days for Hercules rental?" );
var MoviePrice = 3;

var totalRentalCost =
    MoviePrice * littleMermaidRentalDays +
    MoviePrice * brotherBearRentalDays +
    MoviePrice * herculesRentalDays;
alert("Your total rental cost is $" + totalRentalCost);

var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;
var googleHours = prompt("How many hours did you work for Google?");
var amazonHours = prompt("How many hours did you work for Amazon?");
var facebookHours = prompt("How many hours did you work for Facebook?");
var totalPay = (googleRate * googleHours) +
    (amazonRate * amazonHours) +
    ( facebookRate * facebookHours);
alert("You made $"+ totalPay + " this week.");

var isClassAvailable = prompt("Is the class available?");
var isScheduleFree = prompt("Is your schedule free to take a class?");
var enrollStatus = (isClassAvailable == true) && (isScheduleFree == true);
alert("Enrollment availability for a class: " + (enrollStatus));

var itemsPurchased = parseInt(prompt("How many items did you purchase?"));
var checkOfferValid = confirm("Click OK if your offer is valid");
var checkPremiumMember = confirm("Click OK if you are a premium member");

alert("offer applied: " +
    (checkOfferValid && (itemsPurchased > 2 || checkPremiumMember)));

