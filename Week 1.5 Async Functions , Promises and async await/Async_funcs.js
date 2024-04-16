function findSum(n){
    let ans = 0;
    for (let i = 0 ; i < n ; i++){
        ans = ans + i;

    }
    return ans  ;

}

function findSumTill(){
    console.log( findSum(100) );
}

//Busy Waiting -->  without using the async funcs how to do that thing . 
function syncsleep (){
    let ans = 1 ;
    for(let i = 0 ;i < 10000000 ; i++) {
        ans++ ;

    }
}

syncsleep();
findSumTill();

//setTimeout (findSumTill ,1000);
console.log("Hello World");
