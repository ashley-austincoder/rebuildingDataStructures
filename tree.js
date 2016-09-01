var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods)

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newNode = Tree(value);
  this.children.push(newNode);
};

treeMethods.contains = function(target) {
  if(this.value === target) {
    return true;
  }
  
  for (var i = 0; i < this.children.length; i++ ) {
    var child = this.children[i];
    if (child.contains(target)) {
      return true;
    }
  }
  return false;
};

treeMethods.traverse = function(callback) {
  callback(this.value);
  if(!this.children) return;
  
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    child.traverse(callback);
  }
};
