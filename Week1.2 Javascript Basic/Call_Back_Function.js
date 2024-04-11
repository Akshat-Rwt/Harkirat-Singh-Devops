function sum (num1 , num2 , fnToCall){
    let result = num1 +  num2 ;
    return result ;
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data){
    console.log("Sum of the result is : " + data);

}

//You can only allowed one function after this 
//How will you displayResult of a sum

const ans = sum(1,2, displayResult);