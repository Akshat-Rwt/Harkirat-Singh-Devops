//ParseInt --> It will convert a string to int .

function explainParseInt(value) {
    console.log("Original Value:", value);
    let result = parseInt(value);
    console.log("After parseInt:", result);
  }
  
  // Example Usage for parseInt
  explainParseInt("42");
  explainParseInt("42px");
  explainParseInt("3.14"); 
  
  //Output :- 42 
  //          42
  //          3
  
  //ParseFloat --> It will convert string to float.
  
  function explainParseFloat(value) {
    console.log("Original Value:", value);
    let result = parseFloat(value);
    console.log("After parseFloat:", result);
  }
  
  // Example Usage for parseFloat
  explainParseFloat("3.14");
  explainParseFloat("42");
  explainParseFloat("42px");

  // Output :-
  //            3.14
  //            42
  //            42
  