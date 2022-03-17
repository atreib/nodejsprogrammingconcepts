export class Node {
  data: number;
  left?: Node;
  right?: Node;

  constructor(
    data: number,
    left: Node | undefined = undefined,
    right: Node | undefined = undefined
  ) {
    this.data = data;
    this.left = left;
    this.right = right;
  };
}
