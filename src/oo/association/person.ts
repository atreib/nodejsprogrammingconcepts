export class Person {
  constructor(public name: string) { }

  private marriedTo?: Person = undefined;

  public marry(person: Person) {
    this.marriedTo = person;
  }

  public isMarriedTo(): string | undefined {
    return this.marriedTo?.name;
  }
}
