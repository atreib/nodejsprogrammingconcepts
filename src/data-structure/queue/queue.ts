class MyQueue {
  private queue: string[] = [];

  public enqueue(value: string): void {
    this.queue.push(value);
  }

  public dequeue(): string | undefined {
    return this.queue.shift();
  }

  public top(): string | undefined {
    return this.queue.length > 0 ? this.queue[0] : undefined;
  }

  public isEmpty(): boolean | undefined {
    return this.queue.length <= 0;
  }

  public consoleStack(): void {
    this.queue.forEach((element, i) => {
      console.log(`${i}. ${element}`);
    });
  }
}

export { MyQueue };
