

var HashTable = function() {
  this._size = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  //get index to insert from hash function
  var index = getIndexBelowMaxForKey(k, this._limit);
  //locate bucket with Limited array method get
  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    //save bucket to key is already in table
    var check = bucket[i];
    if (check[0] === k) {
      //if found, save old v and replace with new v
      var oldValue = check[1];
      check[1] = v;
      //return out of function, returning old value
      return oldValue;
    }
  }
  //if new value push in new k/v pair
  bucket.push([k, v]);
  //set updated bucket back in storage
  this._storage.set(index, bucket);
  //increase size since another kv pair was inserted
  this._size++;
  //if over 75% full then run resize
  if (this._size > this._limit * 0.75) {
    this._resize(this._limit * 2);
  }

  return undefined;

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //find proper bucket through Limited Array method get and index
  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var check = bucket[i];
    //if input(k) is found, return the v
    if (check[0] === k) {
      return check[1];
    }
  }
  //if not found return undefined
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var check = bucket[i];
    if (check[0] === k) {
      //if k is found, remove [k,v] from bucket
      bucket.splice(i, 1);
      //don't forget to  decrement size
      this._size--;
      //resize if less then 25% full
      if (this._size < this._limit * 0.25) {
        this._resize(Math.floor(this._limit / 2));
      }
      //return value of removed pair
      return check[1];
    }
  }
  //if not found returned undefined
  return undefined;
};

HashTable.prototype._resize = function(newLimit) {
  var oldStorage = this._storage;

  // min size of 8, return if nothing to do!
  newLimit = Math.max(newLimit, 8);
  if (newLimit === this._limit) { return; }

  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);
  this._size = 0;

  oldStorage.each(function(bucket) {
    if (!bucket) { return; }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));
};





//Helper functions 
ar LimitedArray = function(limit) {
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index) {
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value) {
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

