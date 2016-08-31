//First in last out, last in first out storage

var Stack = function() {
  var newStack = Object.create(stackMethods)

  newStack.storage = {};
  newStack.start = 0;
  newStack.end = 0;

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.end] = value;
  this.end++;
};

stackMethods.pop = function() {
  //only pop off if there is anything in storage
  if(this.end > 0){
    this.end--;
    var del = this.storage[this.end];
    delete this.storage[this.end];
    return del;
  } else {
    return null;
  }
};

stackMethods.size = function() {
  return this.end;
};
