// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
function getLength(str) {
    console.log("Original String:", str);
    console.log("Length:", str.length);
  }
  getLength("Hello World"); // Output :- 11
  
  // indexOf
  function findIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.indexOf(target));
  }
  findIndexOf("Hello World", "World"); // Output :- 6
  
  // lastIndexOf
  function findLastIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.lastIndexOf(target));
  }
  findLastIndexOf("Hello World World", "World"); // Output :- 12
  
  // slice --> Its start from the starting index and goes -1 till the end index 
  function getSlice(str, start, end) {
    console.log("Original String:", str);
    console.log("After slice:", str.slice(start, end));
  }
  getSlice("Hello World", 2, 5);  // Output :- llo
  
  // substring --> Its start from the given index and from there count and goes till the end . 
  function getSubstring(str, start, end) {
    console.log("Original String:", str);
    console.log("After substring:", str.substring(start, end));
  }
  getSubstring("Hello World", 2, 5); // Output :- llo W
  
  // replace --> Its is used to replace the world with the given another world.
  function replaceString(str, target, replacement) {
    console.log("Original String:", str);
    console.log("After replace:", str.replace(target, replacement));
  }
  replaceString("Hello World", "World", "JavaScript"); // Output :- Hello Javascript
  
  // split 
  function splitString(str, separator) {
    console.log("Original String:", str);
    console.log("After split:", str.split(separator));
  }
  splitString("Hello World", " "); // Output :-  ["Hello" , "World"]
  
  // trim --> It used to trim the space at the beginning and at the end . It is not trim the spaces at the middle of the word .
  function trimString(str) {
    console.log("Original String:", str);
    console.log("After trim:", str.trim());
  }
  trimString(" Hello World "); // Output :- Hello World 
  
  // toUpperCase -->  It will convert the given string to Capital Letter .
  function toUpper(str) {
    console.log("Original String:", str);
    console.log("After toUpperCase:", str.toUpperCase());
  }
  toUpper("Hello World"); //output :- HELLO WORLD 
  
  // toLowerCase --> It will convert the given string to the Small Letter. 
  function toLower(str) {
    console.log("Original String:", str);
    console.log("After toLowerCase:", str.toLowerCase());
  }
  toLower("Hello World"); // Output :- hello world 
  