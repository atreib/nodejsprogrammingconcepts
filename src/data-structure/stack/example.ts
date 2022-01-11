import { MyStack } from "./stack";

const stack = new MyStack();

stack.push("first");
stack.push("second");
stack.push("third");
stack.pop();
stack.push("fourth")

console.log(`Is our stack empty? ${stack.isEmpty()}`);
console.log(`The next we're going to have access is the last we added to our stack: ${stack.top()}`);
console.log("This is our stack at the end of this program:");
stack.consoleStack();
