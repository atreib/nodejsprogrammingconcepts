/**
 * In Typescript, our code is converted to Javascript and it has no overloading syntax support
 *
 * So, to achieve the static polymorphism, we need to use:
 *   - Multiple invocation signatures [THIS ONE IS HERE]
 *   - Union Type
 *   - Dictionary and intensional type analysis technique
 */

class Foo {
  public bar(s: string): number;
  public bar(n: number): string;

  public bar(arg: any): any {
    if (typeof (arg) === 'number') return `${arg.toString()} is now a sring`;
    if (typeof (arg) === 'string') return arg.length;
  }
}

const foo = new Foo();
console.log(`This string length is: ${foo.bar("Hello")}`);
console.log(foo.bar(1324234));
