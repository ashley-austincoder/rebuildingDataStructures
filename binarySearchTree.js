var BinarySearchTree = function(value) {
  var tree = Object.create(binaryTreePrototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;

  return tree;
};

var binaryTreePrototype = {};

//add a node to binery search tree
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

//return true if val is in the tree, false if not
binaryTreePrototype.contains = function(val) {
  if(this.value === val) return true;
  
  if(val < this.value && this.left){
    return this.left.contains(val);
  } else if (val > this.value && this.right){
    return this.right.contains(val);
  }
  return false;
};

//recurse through each node in tree and run callBack on each
binaryTreePrototype.cbEach = function(callBack) {
  callBack(this.value)
  if(this.left){
    this.left.cbEach(callBack);
  } else if (this.right){
    this.right.cbEach(callBack)
  }
};
