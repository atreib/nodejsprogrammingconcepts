/**
 * Our class Student exists by itself
 */
export class Student {
  constructor(private readonly name: string) { };

  public getName(): string {
    return this.name;
  }
}
