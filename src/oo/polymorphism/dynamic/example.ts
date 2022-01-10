import { Animal } from "./animal";
import { Duck } from "./duck";
import { Dog } from "./dog";
import { Cat } from "./cat";

const parent: Animal = new Animal(); // Animal reference and object
const dog: Animal = new Dog(); // Animal reference, Dog object
const duck: Duck = new Duck(); // Duck reference and object
const cat: Cat = new Cat(); // Cat reference and object

console.log("An animal says: ", parent.speak());
console.log("A dog says: ", dog.speak());
console.log("A duck says: ", duck.speak());
console.log("A cat says: ", cat.speak());
