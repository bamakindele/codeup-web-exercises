"use strict"
//while loop runs 16x

var y = 1;
var x = 0;
while(x < 16){
y = y*2;
console.log(y);
x++;
}


//random number between 50 & 100
var availableCones = Math.floor(Math.random() * 50) + 50;
//random number between 1 & 5
var conesSold = Math.floor(Math.random() * 5) + 1;

// display the generated random number
console.log('allCones: ' + availableCones);
console.log('conesSold: ' + conesSold);

var i = 0;
do {
    if (availableCones < 1) {  //available cones at zero
        console.log('Yay! I sold them all')
    } else if (availableCones < conesSold) {
        console.log('Cannot sell you ' + conesSold + ' cones I only have ' + availableCones + '...');
        availableCones = availableCones - conesSold // updates the available cones inventory after each sale
    } else {
        console.log(conesSold + ' cones sold...');
        availableCones = availableCones - conesSold // updates the available cones inventory after each sale
    }
    i++;
}
while (i < 15);// Each random number generated will run 15x while availability of cones will be updated.






