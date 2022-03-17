import { Tree } from "./tree";

const tree = new Tree();
tree.add(7);
tree.add(3);
tree.add(1);
tree.add(3);
tree.add(4);
tree.add(2);

console.log(`****`);
console.log(`Binary Search Tree`);
console.log(`****`);
console.log(`\n`);

console.log(`Tree info:`);
console.log(`  Min value from the tree: ${tree.findMin()}`);
console.log(`  Max value from the tree: ${tree.findMax()}`);
console.log(`\n`);

console.log(`Tree data:`);
tree.show();
console.log(`\n`);

console.log(`Testing the find() method:`)
console.log(`  2: ${tree.find(2)?.data ?? `Not found`}`)
console.log(`  1: ${tree.find(1)?.data ?? `Not found`}`);
console.log(`  4: ${tree.find(4)?.data ?? `Not found`}`);
console.log(`  7: ${tree.find(7)?.data ?? `Not found`}`);
console.log(`  10 (do not exist): ${tree.find(10)?.data ?? `Not found`}`);
console.log(`  5 (do not exist): ${tree.find(5)?.data ?? `Not found`}`);
