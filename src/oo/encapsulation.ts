/**
 * Through encapsulation, we define what our
 * "user" can access and how
 */
class EncapsulationExample {
  private minimum: number = 1000; // User hasn't access to our minimum
  private total: number; // User hasn't access to our total

  constructor() {
    this.total = 0; // set initial state on constructor
  }

  // User can add positive numbers to our total
  public add(value: number) {
    if (!value) return;
    if (value <= 0) return;
    if (isNaN(value)) throw new Error('Value is not valid');

    this.total += value;
  }

  // User can check if its have enough
  public isEnough() {
    return this.total > this.minimum;
  }
}

const example = new EncapsulationExample();
example.add(200);
console.log(`It's enough? `, example.isEnough());
example.add(1000);
console.log(`It's enough? `, example.isEnough());
// console.log(example.total); // It's not going to compile
// console.log(example.minimun); // It's not going to compile
