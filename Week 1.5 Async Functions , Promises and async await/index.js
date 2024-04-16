const fs  = require("fs");
// fs --> filesystem module

fs.readFile("a.txt" , "utf-8", function(err,data){
    console.log(data);
})


console.log("He there ") ; 

// Which one run first ?
// First Hi there is run then a.txt run . Because of async funcs .