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

//create the array

function fillArray() { //create the fuction to fill the array
    var arr = []; //create the array in the function

    for(var multiplicant = 1; multiplicant <= 5; multiplicant++) { //create a for loop to run the multiplicant a number of times (dynamic)
    
        for(var multiplier = 1; multiplier <= 12; multiplier++) { //create a for loop to run the multiplier a number of times (dynamic)
            var product = getProduct(multiplicant, multiplier); //create a variable to house the product function
            var line = buildLine(multiplicant, multiply, product); //create a variable to house the buildLine function
            arr.push(line);
        }
    }

    return arr;
}

function buildLine(multiplicant, multiply, product) {
    return [multiplicant, multiplier, product];
}

function getProduct(multiplicant, multiplier) {
    return multiplicant * multiplier;
}

var table = fillArray();
console.log(table);

/* --------------------------------------------------------------
    WITH EXTRAS!!!
-------------------------------------------------------------- */

var example = [
  [ 1, 1, 1 ],
  [ 1, 2, 2 ],
  [ 5, 12, 60]
];


function fillArray(format) {
  var arr = [];
  for(var multiplicant = 1; multiplicant <= 5; multiplicant += 1) {
  
    for(var multiplier = 1; multiplier <= 12; multiplier += 1) {
      var product = getProduct(multiplicant, multiplier);
      var line = buildLine(multiplicant, multiplier, product, format);
      arr.push(line);
    }
    
  }
  
  return arr;
}

function buildLine(multiplicant, multiplier, product, format) {
  if (format === 'string') {
    return multiplicant + ' x ' + multiplier + ' = ' + product;
  } else if (format === 'array') {
    return [multiplicant, multiplier, product];
  } else {
    return 'format not specified';
  }
}

function getProduct(multiplicant, multiplier) {
  return multiplicant * multiplier;
}

// one loop for the multiplicant (1 - 5)
// one loop for the multiplier (1 - 12)
// returns an array where each element is an array
// each element has a multiplicant, a multiplier and a product
// the returned array elements are ordered by multiplicant, then 
// by multiplier


function addLine(arr, multiplicant, multiplier, product) {
  arr.push([multiplicant, multiplier, product]);
}


var table = fillArray('string');
console.log(table);

