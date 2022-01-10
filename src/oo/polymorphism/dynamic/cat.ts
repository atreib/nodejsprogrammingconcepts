import { Animal } from "./animal";

class Cat extends Animal {
  public speak(): string {
    return "Meow";
  }
}

export { Cat };
