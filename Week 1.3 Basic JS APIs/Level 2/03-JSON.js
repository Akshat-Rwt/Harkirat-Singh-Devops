// JSON - JavaScript Object Notation

const user = {
    name : "Akshat",
    age : 22,
    gender : "male"
}

console.log(user["name"]);

// If you want to send this data then you can make it an object .

const users = '{ name : "Akshat",  age : 22, gender : "male" }';
console.log(users["name"]);

// But the problem os that how other people would know that it is an object or not .So for that we have JSON 
// Two main feacture of JSON
// JSON.parse 
// JSON.stringify

const user1 = {
    name : "Akshat" ,
    gender : "male "
}

const finalString = JSON.stringify(user1); // Its just simple convert the objeect to string .....
console.log(finalString);


function jsonMethods(jsonString) {
    console.log("Original JSON String:", jsonString);
  
    // Parsing JSON string to JavaScript object
    let parsedObject = JSON.parse(jsonString);
    console.log("After JSON.parse():", parsedObject);
  
    // Stringifying JavaScript object to JSON string
    let jsonStringified = JSON.stringify(parsedObject);
    console.log("After JSON.stringify():", jsonStringified);
  }
  
  // Example Usage for JSON Methods
  const sampleJSONString =
    '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';
  
  jsonMethods(sampleJSONString);
  