
// Class for creating a Node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Class for BST
class BST {
  constructor() {
    this.root = null;
  }

  // inserting node
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contains(value) {
    if (this.root === null) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

// Implementation
let myTree = new BST();
myTree.insert(40);
myTree.insert(30);
myTree.insert(50);
myTree.insert(25);
myTree.insert(35);
myTree.insert(45);
myTree.insert(60);

console.log(myTree.contains(30));

console.log("The BST is");
console.log(myTree);
