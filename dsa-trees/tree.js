/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let total = this.root.val;
    for (let child of this.root.children) {
      total += new Tree(child).sumValues();
    }
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let count = this.root.val % 2 === 0 ? 1 : 0;
    for (let child of this.root.children) {
      count += new Tree(child).countEvens();
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let count = this.root.val > lowerBound ? 1 : 0;
    for (let child of this.root.children) {
      count += new Tree(child).numGreater(lowerBound); 
    }
    return count;
  }
}


const child1OfChild1 = new TreeNode(3);
const child2OfChild1 = new TreeNode(4);
const child1OfChild2 = new TreeNode(7);
const child2OfChild2 = new TreeNode(8);

const child1 = new TreeNode(5, [child1OfChild1, child2OfChild1]);
const child2 = new TreeNode(6, [child1OfChild2, child2OfChild2]);

const root = new TreeNode(10, [child1, child2]);

const tree = new Tree(root);

const totalSum = tree.sumValues();
const totalEvens = tree.countEvens();
const totalGreater = tree.numGreater(9);

console.log(`The sum of all node values in the tree is: ${totalSum}`); 
console.log(`The number of even values in the tree is: ${totalEvens}`); 
console.log(`The number of values in the tree greater than lower bound is: ${totalGreater}`); 

module.exports = { Tree, TreeNode };
