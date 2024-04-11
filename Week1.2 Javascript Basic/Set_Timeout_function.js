// New Function setTimeout

function greet(){
    console.log("Hello World ");

}

function greetAlien(){
    console.log("Hello Alien ");

}

setTimeout( greetAlien , 3*1000) // Its is suppose to call a function after the time which is given byt the user .Here its is in 3 milliseconds
setInterval(greetAlien , 1*1000); //Its is a internal its can print greatAlien after every 1 second .