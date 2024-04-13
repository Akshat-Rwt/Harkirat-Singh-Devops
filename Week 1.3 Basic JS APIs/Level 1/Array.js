// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push() --> Add some elements in the array.
function pushExample(arr, element) {
    console.log("Original Array:", arr);
  
    arr.push(element);
    console.log("After push:", arr);
  }
  pushExample([1, 2, 3], 4); // Output :- [1, 2, 3, 4]
  
  // pop() --> Remove some Elements from the array.
  function popExample(arr) {
    console.log("Original Array:", arr);
  
    arr.pop();
    console.log("After pop:", arr);
  }
  popExample([1, 2, 3]); //Output :- [1 , 2]
  
  // shift() --> It pull from the front of the array
  function shiftExample(arr) {
    console.log("Original Array:", arr);
  
    arr.shift();
    console.log("After shift:", arr);
  }
  shiftExample([1, 2, 3]); // Output :- [2 , 3]
  
  // unshift() --> It put something from the front of the array .
  function unshiftExample(arr, element) {
    console.log("Original Array:", arr);
  
    arr.unshift(element);
    console.log("After unshift:", arr);
  }
  unshiftExample([1, 2, 3], 0); // Output :- [0 , 1, 2, 3]
  
  // concat() --> It will merge the arrays
  function concatExample(arr1, arr2) {
    console.log("Original Arrays:", arr1, arr2);
  
    let arr3 = arr1.concat(arr2);
    console.log("After concat:", arr3);
  }
  concatExample([1, 2, 3], [4, 5, 6]); // Output :- [1 ,2, 3, 4, 5, 6]
  
  // forEach() --> To iterate over an array 
  function forEachExample(arr) {
    console.log("Original Array:", arr);
  
    arr.forEach(function(item, index) {
      console.log(item, index);
    });
  }
  forEachExample([1, 2, 3]); 
  
    //Output :- 1 0
    //          2 1
    //          3 2
  
 