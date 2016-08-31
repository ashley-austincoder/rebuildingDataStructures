var Queue = function() {
  this.storage = {};
  this.start = 0;
  this.end = 0;
};

//add value to back of the queue
Queue.prototype.enqueue = function(value) {
  this.storage[this.end++] = value;
};

//remove first item in the queue
Queue.prototype.dequeue = function() {
  var remove = this.storage[this.start];
  delete this.storage[this.start];

  return remove;
};

Queue.prototype.size = function() {
  return this.end - this.start;
};
