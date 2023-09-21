/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    // initialize the queue for BFS
    const queue = [[this.root, 1]];

    while (queue.length) {
      // dequeue node and its depth
      const [node, depth] = queue.shift();

      // If node a leaf, return depth (minimum depth)
      if (!node.left && !node.right) return depth

      // Otherwise enqueue the children
      if (node.left) queue.push([node.left, depth + 1]);
      if (node.right) queue.push([node.right, depth + 1]);
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    let maxDepth = 1;
    const queue = [[this.root, 1]]; //initialize the queue

    while (queue.length) {
      // dequeue a node and its depth
      const [node, depth] = queue.shift();

      // Update the max depth
      maxDepth = Math.max(maxDepth, depth);

      //enqueue the children
      if (node.left) queue.push([node.left, depth + 1]);
      if (node.right) queue.push([node.right, depth + 1]);
    } 
    return maxDepth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let mSum = -Infinity;

    //recursive DFS function
    const dfs = (node) => {
      if (!node) return 0;

    // get max path sum from each child
    const leftSum = dfs(node.left);
    const rightSum = dfs(node.right);

    // Update max sum with current node & children
    mSum = Math.max(mSum, node.val, node.val + leftSum, node.val + rightSum, node.val + leftSum + rightSum);

    //return max sum 
    return node.val + Math.max(0, leftSum, rightSum);
    };
    dfs(this.root);
    return mSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let res = null;

    // recursive ordered traversal
    const orderedTraversal = (node) => {
      if (!node) return;

      // go to left subtree
      orderedTraversal(node.left);

      // check current node value
      if (node.val > lowerBound) {
        // update result, null or greater value
        if(res === null || node.val < res) {
          res = node.val;
        }
      }
      // go to right subtree
      orderedTraversal(node.right); 
    }
    //traversal from the root
    orderedTraversal(this.root);

    return res;
  }

}

const leftLeaf1 = new BinaryTreeNode(2);
const rightLeaf1 = new BinaryTreeNode(7);
const leftLeaf2 = new BinaryTreeNode(12);
const rightLeaf2 = new BinaryTreeNode(18);
const leftChild = new BinaryTreeNode(5, leftLeaf1, rightLeaf1);
const rightChild = new BinaryTreeNode(15, leftLeaf2, rightLeaf2);
const root = new BinaryTreeNode(10, leftChild, rightChild);
const tree = new BinaryTree(root);

console.log(`Minimum Depth: ${tree.minDepth()}`); // Should print 2
console.log(`Maximum Depth: ${tree.maxDepth()}`); // Should print 3
console.log(`Maximum Sum: ${tree.maxSum()}`);  // Should print 55(10 + 15 + 12 + 18)

console.log(`Next Larger than 9: ${tree.nextLarger(9)}`);  // Should print 10
console.log(`Next Larger than 12: ${tree.nextLarger(12)}`);  // Should print 15
console.log(`Next Larger than 20: ${tree.nextLarger(20)}`);  // Should print null




module.exports = { BinaryTree, BinaryTreeNode };
