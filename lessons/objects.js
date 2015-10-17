// MAKERPREP
//LESSON 9: https://github.com/MakerPrepLA/makerprepla/blob/master/lessons/lesson09(objects)/lesson9.md
//Completed EXERCISES: https://jsbin.com/moyuhuseba/1/edit?js,console,output


// NOTES from Class

"hello".length; //property
"hello".toUpperCase(); //method
// methods are functions that apply to objects
// arrays are very specific about order, objects are not
// JSON = JavaScript Object Notation — THE object format
// do not use variables with dot notation, you have to use bracket notation
// // Keys are ALWAYS strings
// // Keys with spaces require quotes
// console.log(car[color]); // Bracket notation
// console.log(car.color); // dot notation
// collection = an object or an array
// f + i + TAB creates a for in loop

console.log("----------------------simple object----------------------");

var car = {
  color: "red",
  make: "Tesla",
  year: 2016
};
console.log(car.color);

car.color = "purple";

console.log(car.color);

car.price = "$37,000";
console.log(car.price);

console.log(car);



console.log("----------------------objectception----------------------");
// objectception —- objects within objects within objects
car.seats = {
  material: "leather",
  heated: true,
  armrest: {
    comfy: true,
    brown: "okay",
    box: {
      color: "aubeurn"
    }
  }
};

console.log("Please work: " + car.seats.armrest.box.color);


console.log("----------------------for in loop----------------------");

//key is a placeholder
for (var key in car) {
  console.log(key);
  console.log(key + ": " + car[key]);
}


// JS Bin Exercises
