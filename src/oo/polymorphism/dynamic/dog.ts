import { Animal } from "./animal";

class Dog extends Animal {
  public speak(): string {
    return "Woof";
  }
}

export { Dog };
