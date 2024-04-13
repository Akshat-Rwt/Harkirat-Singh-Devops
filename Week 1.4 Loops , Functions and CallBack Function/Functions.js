// Functions :- A set of statements that performs task or calculate a value .
// It should take some input and return an output where there is some obvious relationship between the input and the output 

// A function is a bunch of line of code that perform some tasks .

function findSum (n){    // Arguments 
    let ans = 0;
    for(let i = 0; i < n ;i ++){
        ans = ans + i;

    }
    return ans ;
}

console.log(findSum(10));  // Parameters 

//Why do we need Functions ?
//Because by using functions we cannot write the same code again and again. 
