import { Node } from "./node";

export class Tree {
  root?: Node = undefined;

  show(): void {
    if (!this.root) {
      console.log("The tree is empty");
      return;
    }

    const print = (node: Node, parent?: Node) => {
      console.log(`Node: ${node.data}`);
      console.log(`Left: ${node.left?.data ?? `-`}`);
      console.log(`Right: ${node.right?.data ?? `-`}`);
      console.log(`  Parent: ${parent?.data ?? `-`}`);
      console.log(`\n`);

      if (node.left) print(node.left, node);
      if (node.right) print(node.right, node);
    }

    print(this.root);
  }

  add(data: number): void {
    if (!this.root) {
      this.root = new Node(data);
      return;
    }

    const search = (parent: Node): void => {
      if (data === parent.data) return;

      // Left
      if (data < parent.data) {
        if (!parent.left) {
          parent.left = new Node(data);
          return;
        }

        search(parent.left);
      }

      // Right
      if (data > parent.data) {
        if (!parent.right) {
          parent.right = new Node(data);
          return;
        }

        search(parent.right);
      }
    };

    search(this.root);
  }

  findMin(): number | undefined {
    if (!this.root) return undefined;

    const min = (node: Node): number => {
      if (!node.left) return node.data;
      return min(node.left);
    }

    return min(this.root);
  }

  findMax(): number | undefined {
    if (!this.root) return undefined;

    const max = (node: Node): number => {
      if (!node.right) return node.data;
      return max(node.right);
    }

    return max(this.root);
  }

  find(data: number): Node | undefined {
    if (!this.root) return undefined;

    const search = (node: Node): Node | undefined => {
      if (data === node.data) return node;
      if (node.left && data < node.data) return search(node.left);
      if (node.right && data > node.data) return search(node.right);
      return undefined;
    }

    return search(this.root);
  }
}
