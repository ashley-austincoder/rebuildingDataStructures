//Set stores values of any type into an object

var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}

  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this.storage[item] = true;
};

setPrototype.contains = function(item) {
  //returns true if item is already stored
  //false if it has not been saved
  return !!this.storage[item]
};

setPrototype.remove = function(item) {
  //delete key value pair from storage
  delete this.storage[item]
};