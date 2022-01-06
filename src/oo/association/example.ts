import { Person } from './person';

const andre = new Person("Andre");
const giovana = new Person("Giovana");
const kid = new Person("Joseph");

andre.marry(giovana);
giovana.marry(andre);

console.log(`Andre is married with: ${andre.isMarriedTo()}`);
console.log(`Giovana is married to: ${giovana.isMarriedTo()}`);
console.log(`Joseph, a kid, is married to no one (it returns "${kid.isMarriedTo()}")`);
