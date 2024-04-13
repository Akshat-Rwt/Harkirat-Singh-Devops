// Object Methods Explanation
function objectMethods(obj) {
    console.log("Original Object:", obj);
  
    let keys = Object.keys(obj); // print all the keys but in array form and every object is an string 
    console.log("After Object.keys():", keys);
  
    let values = Object.values(obj); // print all the values but in array form and every object is a string 
    console.log("After Object.values():", values);
  
    let entries = Object.entries(obj); // This has both key and object but array inside array format 
    console.log("After Object.entries():", entries);
  
    let hasProp = obj.hasOwnProperty("property");
    console.log("After hasOwnProperty():", hasProp);
  
    let newObj = Object.assign({}, obj, { newProperty: "newValue" }); // It is used to merge two objects 
    console.log("After Object.assign():", newObj);
  }

  // Example Usage for Object Methods
  const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  };
  
  objectMethods(sampleObject);
  

  //Example of hasOwnProperty :- 

  let obj = {
    name : "Akshat"
  }

  console.log(obj.hasOwnProperty("name")); // o/p :- True because there is an entity of a name 
  console.log(obj.hasOwnProperty("age")); // o/p :- False because there no an entity of an age  