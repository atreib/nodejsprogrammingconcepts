import { MyQueue } from "./queue";

const queue = new MyQueue();

queue.enqueue("first");
queue.enqueue("second");
queue.enqueue("third");
const removed = queue.dequeue();
queue.enqueue("fourth")

console.log(`We enqueued 4 elements`);
console.log(`We removed 1 element from the queue, which was: ${removed}`)
console.log(`Is our queue empty? ${queue.isEmpty()}`);
console.log(`The next element we're going to have access is the oldest from our queue: ${queue.top()}`);
console.log("This is our queue at the end of this program:");
queue.consoleStack();
