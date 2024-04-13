// finds the square of the input 
function square (n){
    return n * n;
}

function cube (n){
    return n * n * n;
}

// Finds the sum of the square of the inputs 

function sumOfSquare(a,b , fn){
    const val1 = fn(a);
    const val2 = fn(b);
    
    return val1 + val2 ;
}

// function sumOfCubes(a,b){
//     const val1 = cube(a);
//     const val2 = cube(b);
    
//     return val1 + val2 ;
// }

let result1  = sumOfSquare(1,2 , square);
console.log(result1);

// let result2  = sumOfCubes(1,2);
// console.log(result2);