// Class :-  THey put a bunch of properties of certain type together 
// Class is a blue print of an object ... Simple means you can make a blue print of something and after that you can apply it anywhere and many times . 
// Objects :-  This is also called a instance . 


//We can use these thing and make a code but as we can see that if in future the animals can increase but all of them use the same 3 properties .So if we can use the the structure and make them universal for all the animal so if should be better for me to run code for each and every animal if they added in the future to .... . SO for that class used ......

/* const dog = {  // We can use this code to but it is not fully efficient for the other animals . 
    name : "doggi",
    legCount : 2,
    speaks : "Bhow Bhow",

};
const cat = {
    name : "Cat",
    legCount : 2,
    speaks : "Meow",

};

function printstr(animal){
    console.log("Animal " + animal["name"] + " " + animal["speaks"]);
}

printstr(dog);
printstr(cat) */


// Here we can make the blue print of animal 
class Animal {
    constructor(name, legCount , speaks) {
      this.name = name
      this.legCount = legCount
      this.speaks = speaks
    }

    static myType(){
        console.log("Animal");
    }

    speak(){
        console.log("hi there " + this.speaks);
    }

    console.log(Animal.myType()) // Ouput is :- Animal
    console.log(Animal.speak()) // Output is :- It provide the error because animal.speak is not a function . That speaks function is only called on an object of the class cannot called directly on the class . If you want to do that you can make it static . 
    

    let dog = new Animal("Doggie" , 4 , "Bhow bhow"); // Create object 
    let cat = new Animal("cat" , 4 , "meow");
    
    dog.speaks(); // call function on object
    // describe() {
    //   return `${this.name} has ${this.legCount} legs`
    // }
  }
  