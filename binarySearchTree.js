var BinarySearchTree = function(value) {
  var tree = Object.create(binaryTreePrototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;
};

var binaryTreePrototype = {};

binaryTreePrototype.insert = function(val) {
  if(val < this.value){
    if(this.left === null){
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  } else if (val > this.value){
    if(this.right === null){
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  }
};

binaryTreePrototype.contains = function(val) {
  if(this.value === val) return true;
  
  if(val < this.value && this.left){
    return this.left.contains(val);
  } else if (val > this.value && this.right){
    return this.right.contains(val);
  }
  return false;
};

binaryTreePrototype.depthFirstLog = function(callBack) {
  callBack(this.value)
  if(this.left){
    this.left.depthFirstLog(callBack);
  } else if (this.right){
    this.right.depthFirstLog(callBack)
  }
};
