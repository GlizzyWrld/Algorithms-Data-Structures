class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }
    
    let current = this.root;

    while (true) {
      // if val to insert is less than current go left
      if (val < current.val) {
        // if no left child, insert node
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        // Else update current node
        current = current.left;
      }

      else if (val > current.val) {
        //if no right child, insert node
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        // Else update current node
        current = current.right
      }
      else {
        break;
      }
    }
    return this;
  }
  

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    // recursive helper to insert in subtree
    const insertHelp = (node, val) => {
      // if null, return new node with val
      if (!node) return new Node(val);

      //if val to insert is less than node, go left
      if (val < node.val) {
        node.left = insertHelp(node.left, val);
      }

      // if val to insert is greater than node, go right
      else if (val > node.val) {
        node.right = insertHelp(node.right, val);
      } else {
        //if val already exists
        return node;
      }
      return node;
    };
    this.root = insertHelp(this.root, val);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current) {
      if (current.val === val) {
        return current;
      }
      //if search val is less than current node, go left
      if (val < current.val) {
        current = current.left;
      }

      //if search val greater than current node, go right
      else {
        current = current.right;
      }
    }

    // if loop ends without finding value, return undefined
    return undefined;
    
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    const findHelp = (node, val) => {
      if (!node) return undefined;

      if (node.val === val) {
        return node;
      }

      // if search val less than current node, go left
      if (val < node.val) {
        return findHelp(node.left, val);
      }

      // if search val greater than current node, go right
      else {
        return findHelp(node.right, val);
      }
    };
    return findHelp(this.root, val);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const result = [];

    const traverse = (node) => {
      if (!node) return;

      result.push(node.val);

      //traverse left subtree
      traverse(node.left);

      //traverse right subtree
      traverse(node.right);
    };

    traverse(this.root);

    return result;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const result = [];

    const traverse = (node) => {
      if (!node) return;

      // traverse left subtree
      traverse(node.left);

      result.push(node.val);

      //traverse the right subtree
      traverse(node.right);
    }
    traverse(this.root);

    return result;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const result = [];

    const traverse = (node) => {
      if (!node) return;

      // traverse the left subtree
      traverse(node.left);

      // traverse the right subtree
      traverse(node.right);

      result.push(node.val);
    }
    traverse(this.root);

    return result;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const result = [];

    const queue  = [this.root];

    while (queue.length) {
      // dequeue node from front of queue
      const current = queue.shift();

      if (current) {
        result.push(current.val);

        // Enqueue the left and right children
        queue.push(current.left);
        queue.push(current.right);
      }
    }
    return result;
  }

}

const bst = new BinarySearchTree();

// Insert nodes using iterative method
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);

// Insert nodes using recursive method
bst.insertRecursively(12);
bst.insertRecursively(18);

// Find nodes using iterative method
const foundIteratively = bst.find(7); // Should return Node with val 7
const notFoundIteratively = bst.find(20);  // Should return undefined

// Find nodes using recursive method
const foundRecursively = bst.findRecursively(7); // Should return Node with val 7
const notFoundRecursively = bst.findRecursively(20); // Should return undefined

// Pre-order DFS traversal
const preOrder = bst.dfsPreOrder(); // Should return [10, 5, 2, 7, 15, 12, 18]

// In-order DFS traversal
const inOrder = bst.dfsInOrder(); // Should return [2, 5, 7, 10, 12, 15, 18]

// Post-order DFS traversal
const postOrder = bst.dfsPostOrder(); // Should return [2, 7, 5, 12, 18, 15, 10]

// Breadth-first search (BFS) traversal
const bfsResult = bst.bfs(); // Should return [10, 5, 15, 2, 7, 12, 18]

// Console log all results
console.log("Found Iteratively:", foundIteratively);
console.log("Not Found Iteratively:", notFoundIteratively);
console.log("Found Recursively:", foundRecursively);
console.log("Not Found Recursively:", notFoundRecursively);
console.log("Pre-order DFS:", preOrder);
console.log("In-order DFS:", inOrder);
console.log("Post-order DFS:", postOrder);
console.log("BFS:", bfsResult);

module.exports = BinarySearchTree;
