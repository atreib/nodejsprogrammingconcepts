class MyStack {
  private stack: string[] = [];

  public push(value: string): void {
    this.stack.push(value);
  }

  public pop(): void {
    this.stack.pop();
  }

  public top(): string | undefined {
    return this.stack.length > 0 ? this.stack[this.stack.length - 1] : undefined;
  }

  public isEmpty(): boolean | undefined {
    return this.stack.length <= 0;
  }

  public consoleStack(): void {
    this.stack.forEach((element, i) => {
      console.log(`${i}. ${element}`);
    });
  }
}

export { MyStack };
