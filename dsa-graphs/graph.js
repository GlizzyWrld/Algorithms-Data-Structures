class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (const vertex of vertexArray) {
      this.addVertex(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex);

    for(const node of this.nodes) {
      // Remove vortex from their adjacency sets 
      node.adjacent.delete(vertex);
    }
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    const seen = new Set(); // t
    const res = [];

    const traverse = (vertex) => {
      if (!vertex || seen.has(vertex)) return;

      // mark vertex visited
      seen.add(vertex);

      // add vertex val to arr
      res.push(vertex.value);

      // Recursively visiting adjacent nodes
      vertex.adjacent.forEach(neighbor => traverse(neighbor)); 
    };

    traverse(start);

    return res;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    const seen = new Set();
    const res = [];
    const queue = [start];

    while (queue.length) {
      // dequeue a node from front of queue
      const current = queue.shift();

      //if visited, skip
      if (seen.has(current)) continue;

      //mark node visited
      seen.add(current);

      res.push(current.value);

      current.adjacent.forEach(neighbor => {
        if (!seen.has(neighbor)) {
          queue.push(neighbor);
        }
      });
    }
    return res;
  }
} 

// Create new instances of Node
const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');

// Create a new Graph
const graph = new Graph();

// Add vertices to the graph
graph.addVertices([nodeA, nodeB, nodeC, nodeD, nodeE]);

// Add edges to the graph
graph.addEdge(nodeA, nodeB);
graph.addEdge(nodeA, nodeD);
graph.addEdge(nodeB, nodeC);
graph.addEdge(nodeB, nodeE);
graph.addEdge(nodeC, nodeE);
graph.addEdge(nodeD, nodeE);

// Depth First Search starting from node A
const dfsResult = graph.depthFirstSearch(nodeA);
console.log('DFS Result:', dfsResult);  // Output should be [ 'A', 'B', 'C', 'E', 'D' ] 

// Breadth First Search starting from node A
const bfsResult = graph.breadthFirstSearch(nodeA);
console.log('BFS Result:', bfsResult);  // Output should be [ 'A', 'B', 'D', 'C', 'E' ] 

graph.removeEdge(nodeA, nodeB);

// Depth First Search again to see the effect of edge removal
const dfsResultAfterEdgeRemoval = graph.depthFirstSearch(nodeA);
console.log('DFS Result After Edge Removal:', dfsResultAfterEdgeRemoval);

graph.removeVertex(nodeE);

// Breadth First Search again to see the effect of vertex removal
const bfsResultAfterVertexRemoval = graph.breadthFirstSearch(nodeA);
console.log('BFS Result After Vertex Removal:', bfsResultAfterVertexRemoval);
  

module.exports = {Graph, Node}