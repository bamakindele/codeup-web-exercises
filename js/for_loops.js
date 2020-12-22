"use strict"

// SOLUTION NUMBER 2
function showMultiplicationTable(num){
    for(num = 1; num <= 10; num++){
        var result = 7 * num;
        console.log("7" + " x " + num + " = " + result);
    }
}



// SOLUTION NUMBER 3
//https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomNumber(min, max){ // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
for (var i = 0; i < 10; i++) {
        var x = randomNumber(20, 200);
            if (x % 2 == 0){
                console.log(x + " is an even number");
            } else {
                console.log(x + " is an odd number")
            }
}


//SOLUTION NUMBER 4
// https://stackoverflow.com/questions/20738935/how-to-display-pyramid-using-javascript
function pyramidNine() {
    var rows = 9;
    var output = '';
    for (var i = 1; i <= rows; i++) {
        for (var j = 1; j <= i; j++) {
            output += j + '  ';
        }
        console.log(output);
        output = '';
    }
}

pyramidNine();


// SOLUTION NUMBER 5

for (var i = 100; i >= 5; i-=5){
    console.log(i);
}