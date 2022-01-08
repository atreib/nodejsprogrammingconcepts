/**
 * In Typescript, our code is converted to Javascript and it has no overloading syntax support
 *
 * So, to achieve the static polymorphism, we need to use:
 *   - Multiple invocation signatures [THIS ONE IS HERE]
 *   - Union Type [THIS ONE IS HERE]
 *   - Dictionary and intensional type analysis technique
 */

class Calculator {
  public add(a: number[] | number, a2?: number) {
    if (Array.isArray(a)) {
      return a.reduce((a, b) => a + b);
    } else {
      if (!a2) throw new Error("Not implemented");
      return a + a2;
    }
  }
}

const calculator = new Calculator();
console.log(calculator.add(1, 2));
console.log(calculator.add([1, 2, 3, 4]));
