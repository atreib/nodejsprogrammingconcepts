/**
 * Heap is a tree-based data structure;
 * It's a complete binary tree (it's always balanced);
 * It's partially ordered;
 * A common use-case is a priority list;
 * It has two types:
 *   - Max-heap: "parent > node > children"
 *   - Min-heap: "children > node > parent"
 */

interface HeapNode {
  value: number;
}

interface Heap {
  /**
   * Adds a new node to the Heap
   * @param node the new element
   */
  push(node: HeapNode): void;

  /**
   * Shifts the Heap, returning the root
   */
  pool(): HeapNode;

  /**
   * Returns the root without mutating the Heat
   */
  peek(): HeapNode;

  /**
   * Searches for a Node in the Heat, returning it if found
   * @param node
   */
  seach(node: HeapNode): HeapNode | undefined;
}

class MaxHeap implements Heap {
  private readonly data: HeapNode[] = [];

  log() {
    console.log(`  Heap: ${this.data.map(x => x.value).join(', ')}`);
  }

  /**
   * @param idx a node's index
   * @returns the index of the provided node's parent
   */
  private getParentIdx(idx: number): number {
    return Math.floor((idx - 1) / 2)
  }

  /**
   * @param idx a node's index
   * @returns the index of the provided node's left child
   */
  private getLeftChildIdx(idx: number): number {
    return idx * 2 + 1;
  }

  /**
   * @param idx a node's index
   * @returns the index of the provided node's right child
   */
  private getRightChildIdx(idx: number): number {
    return idx * 2 + 2;
  }

  /**
   * @param idx a node's index
   * @returns the index of the provided node's neighbor
   */
  private getNeighborIdx(idx: number): number {
    return idx + 1;
  }

  /**
   * Swaps two nodes
   * @param idx1 the index of Node A
   * @param idx2 the index of Node B
   */
  private swap(idx1: number, idx2: number) {
    const temp = this.data[idx2];
    this.data[idx2] = this.data[idx1];
    this.data[idx1] = temp;
  }

  /**
   * Reorder the Heap (bottom-up)
   */
  private heapifyUp() {
    let currentIdx = this.data.length - 1; // Get latest

    while (
      this.data[this.getParentIdx(currentIdx)] !== undefined
      && this.data[currentIdx].value > this.data[this.getParentIdx(currentIdx)].value
    ) {
      this.swap(currentIdx, this.getParentIdx(currentIdx));
      currentIdx = this.getParentIdx(currentIdx);
    }
  }

  /**
   * Reorder the Heap (top-down)
   */
  private heapifyDown() {
    let currentIdx = 0;

    while (this.data[this.getLeftChildIdx(currentIdx)] !== undefined) {
      let biggestChildIdx = this.getLeftChildIdx(currentIdx);

      const rightChildIdx = this.getRightChildIdx(currentIdx);
      if (
        this.data[rightChildIdx] !== undefined
        && this.data[rightChildIdx].value > this.data[biggestChildIdx].value
      ) {
        biggestChildIdx = rightChildIdx;
      }

      if (this.data[currentIdx].value >= this.data[biggestChildIdx].value)
        return;

      this.swap(currentIdx, biggestChildIdx);
      currentIdx = biggestChildIdx;
    }
  }

  // O(log(n))
  push(node: HeapNode) {
    this.data[this.data.length] = node;
    this.heapifyUp();
  }

  // O(log(n))
  pool(): HeapNode {
    const root = this.data[0]; // Gets the root
    this.data[0] = this.data[this.data.length - 1]; // Crown the latest
    this.data.length--; // Shifts the Heat
    this.heapifyDown();
    return root;
  }

  // O(1)
  peek(): HeapNode {
    return this.data[0];
  }

  // O(n)
  seach(node: HeapNode): HeapNode {
    throw new Error("Not implemented");
  }
}

const maxHeapExample = () => {
  const heap = new MaxHeap();

  console.log(`Pushing 5...`);
  heap.push({ value: 5 });
  heap.log();

  console.log(`Pushing 25...`);
  heap.push({ value: 25 });
  heap.log();

  console.log(`Pushing 40...`);
  heap.push({ value: 40 });
  heap.log();

  console.log(`Pushing 70...`);
  heap.push({ value: 70 });
  heap.log();

  console.log(`Pushing 90...`);
  heap.push({ value: 90 });
  heap.log();

  console.log(`Pushing 44...`);
  heap.push({ value: 44 });
  heap.log();

  const top3 = [];

  console.log("\nShifting...");
  top3.push(heap.pool());
  console.log(`Ranking: ${top3.map(x => x.value).join(", ")}`);
  heap.log();

  console.log("\nShifting...");
  top3.push(heap.pool());
  console.log(`Ranking: ${top3.map(x => x.value).join(", ")}`);
  heap.log();

  console.log("\nShifting...");
  top3.push(heap.pool());
  console.log(`Ranking: ${top3.map(x => x.value).join(", ")}`);
  heap.log();
};

maxHeapExample();
