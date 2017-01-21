function mulitply(num1, num2) {
    var answer = num1 * num2;
    //return `${num1} x ${num2} = ${answer}`;  //cool ES2015 syntax
    return num1 + ' x ' + num2 + ' = ' + answer;
}

console.log(mulitply(2,5));

function string(num1, num2, num3) {
    return (num1 + ' x ' + num2 + ' = ' + num3);
}

console.log(string(2,5,10));

//concerns = problem

//muliply two numbers
//build each line in the table
//display the table

// make dynamic with array

function multiply(multiplicant, multiplier){
    return multiplicant * multiplier;
}

function buildline(multiplicant, multiplier, product) {
    return multiplicant + ' x ' + multiplier + ' = ' + product;
}

function displayTable(multiplicant) {
    for(var multiplier = 1; multiplier < 13; multiplier += 1){
        //calculate the product
        var product = multiply(multiplicant, multiplier);
        //build the line
        var line = buildline(multiplicant, multiplier, product);
        //print the line to the console
        console.log(line);
    }
}

displayTable(7);

//NOW MAKE IT DYNAMIC

function multiply(multiplicant, multiplier){
    return multiplicant * multiplier;
}

function buildline(multiplicant, multiplier, product) {
    return multiplicant + ' x ' + multiplier + ' = ' + product;
}

function displayTable(multiplicant, min, max) { //add in 2 more parameters
    for(var multiplier = min; multiplier <= max; multiplier++){ //change the for loop to have dynamic values of min & max
        //calculate the product
        var product = multiply(multiplicant, multiplier);
        //build the line
        var line = buildline(multiplicant, multiplier, product);
        //print the line to the console
        console.log(line);
    }
}

displayTable(7, 3, 7); //call the function with 3 parameters to get the desired ranges.


/* -----------------------------------------------------
        NOW ADD THE ARGUMENTS TO AN array
-------------------------------------------------------*/

//one loop for multiplicant (1-5)
//one loop for multiplier (1-12)
//returns and array where each element is an array
//each element has a multiplicant, a multiplier, and a product
//the returned array elements are ordered by multiplicant, then by multiplier, then product

function multiply(multiplicant, multiplier) {
    return multiplicant * multiplier;
}

function buildArray() {
    var table = [];
    table.push(loopMultiplicant, loopMultiplier, product);
}

function loopMultiplicant(min, max) {
    values = [];
    for(var i = min; i <= max; i++){
        values.push(min, max);
    }
}



