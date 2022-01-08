/**
 * In Typescript, our code is converted to Javascript and it has no overloading syntax support
 *
 * So, to achieve the static polymorphism, we need to use:
 *   - Multiple invocation signatures [THIS ONE IS HERE]
 *   - Union Type
 *   - Dictionary and intensional type analysis technique [THIS ONE IS HERE]
 */

interface Show<A> {
  show(a: A): string
}

class IntCanShow implements Show<number> {
  show(int: number): string {
    return `int ${int}`
  }
}

class StrCanShow implements Show<string> {
  show(str: string): string {
    return `string ${str}`
  }
}

namespace Show {
  export const Number = new IntCanShow
  export const String = new StrCanShow
}

function show(x: any): string {
  return Show[x.constructor.name as keyof typeof Show].show(x as never)
}

console.log(show(10));
console.log(show(`hello`));
