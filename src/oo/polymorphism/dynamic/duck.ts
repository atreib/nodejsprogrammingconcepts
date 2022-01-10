import { Animal } from "./animal";

class Duck extends Animal {
  public speak(): string {
    return "Quack";
  }
}

export { Duck };
