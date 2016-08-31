/* START SOLUTION */
//////////////////////////////////////////////////////////////////
// This file contains two distinct solutions:
//   - Store nodes and edges in objects
//   - Store relationships in arrays (adjacency matrix)
//
// The two solutions are delineated by comment blocks
// To use the Adjacency Matrix (AM) version, uncomment the line of
// code near the end of this file.

//////////////////////////////////////////////////////////////////
// Implementation #1:
// Store nodes and edges in objects
//
// Using objects to store nodes and edges has the benefit of
// constant-time look-up when looking for any node or edge.
// This implementation can accept any data-type that can be
// represented as a string (keys of objects are strings).
// Lastly, this solution is quite space efficient because hash
// tables only occupy only slightly more space than is needed
// to store the underlying data set.
//////////////////////////////////////////////////////////////////
/* END SOLUTION */

// Instantiate a new graph
var Graph = function() {
 
  this._nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  /* START SOLUTION */
  this._nodes[node] = this._nodes[node] || { edges: {} };
  /* END SOLUTION */
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */