"use strict"

/** source: (Justin Reich) https://www.youtube.com/watch?v=ABvCASsgkTo */
var userNum;

function isValid(input){
    input = parseFloat(input);
    var isNumeric = !isNaN(input);
    var isOdd = input % 2 !==0;
    var isInCorrectRange = input >= 1 && input <= 50;
    return isNumeric && isOdd & isInCorrectRange;
}


function getUserNumber(){
        var userNum;
        while(true) {
            userNum = prompt("Please enter an ODD number between 1 & 50");
            if(isValid(userNum)) {
                break;
            }
            alert('Unacceptable, Enter an ODD number!')
        }
        return userNum;

}


function createOddNumberMessages(userNum) {
    console.log('Number to skip is:' + userNum);
    for (var i = 1; i <= 50; i += 1){
        if (i === parseFloat(userNum)) {
            console.log('Yikes! Skipping number: ' + userNum)
            continue;
        }
        console.log('Here is an odd number: ' + i);
    }
}

userNum = getUserNumber();
createOddNumberMessages(userNum);