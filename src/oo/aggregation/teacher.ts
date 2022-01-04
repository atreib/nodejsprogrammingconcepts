/**
 * Our class Teacher exists by itself
 */
export class Teacher {
  constructor(private readonly name: string) { };

  public getName(): string {
    return this.name;
  }
}
