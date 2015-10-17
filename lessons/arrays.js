//Arrays are Lists, BAM

//declaring arrays
var groceryList = ["eggs", "bacon", "cheese"];
console.log(groceryList);

//.join()
console.log("Go to the store and get me " + grocerList.join(", "));

//.split() splits a string according to the delimiter and insert it into an array
var sentArr = "Take my dog to the park please.".split("p", 2);
console.log("sentArr: " + sentArr);

//Array.isArray() Used to check if something is an array
console.log(typeof []); // !use tells you its an object, have to use Array.isArray to check
console.log(Array.isArray("hey"));
console.log(Array.isArray(grocerList));

//accessing array elements
console.log('Go to the store and get me ' + groceryList[2]);

//change array element
groceryList[1] = 'tofurky';
console.log(grocerList);


//.unshift adds it to the beginning
//.push adds it to the end


//.shift removes and returns the first element
//.pop removes and returns the last element

// pass by reference = passed the memory
// Arrays are passed by reference

// pass by value = passes a copy

//.splice =
//.slice = slice makes a copy of an array

//.concat

// for loop
for (var i = 0; i < 10; i++){
  console.log("i: " + i);
}
