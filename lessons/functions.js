
// MAKERPREP
//LESSON 10: https://github.com/MakerPrepLA/makerprepla/blob/master/lessons/lesson10(functions)/lesson10.md
//Completed EXERCISES:
//1: https://jsbin.com/tahotu/edit?html,console,output
//2:
//3: https://jsbin.com/dezova/edit?js,console,output
//4: https://jsbin.com/bezugi/edit?js,console,output


// NOTES from Class

// simple functions
function demo () {
  // what the function should do with the data passed to it goes here
  console.log("hey it\'s me!");
  console.log("This is the second line");
}

// invocation operators
demo(); // This is the function, demo, with the invocation operator, ()
console.log(demo); // print the entire function

// returns
function demo () {
  // the return will replace the ENTIRE function call
  console.log("hey it\'s me!");
  console.log("This is the second line");
  return 9;
}
console.log (demo() * 2);

//
var x = 12; // global variables

function print () {
  // the return will replace the ENTIRE function call
  console.log("hey it\'s me!");
  var name = "Jim";
  console.log("x (inside): " + x);
  x = 10;
  return 9;
}
print();
console.log("x (outside): " + x);


console.log("---------------Arguments---------------");
// the variables that go into the function are arguments. In the function () they are parameters
function printer(input) {
  console.log("Input: " + input);
  return input * 2;
}
printer(79);

console.log("---------------function declaration---------------");
var x;
function alerter(){
  console.log("ALERT!");
}

//function declarations vs function expressions

//function expression, think math, it has to be defined first
//variable and function declarations get hoisted to the top of the page

console.log("-----------functionception-----------");
function adder (num1, num2){
  return num1 + num2;
}

function subtractor (num1, num2) {
  return num1 - num2;
}

var sum = subtractor (adder(4,5), 8); // inner functions evaluate first then it works its way out

console.log(sum);

// anything after the return statement will not be executed
