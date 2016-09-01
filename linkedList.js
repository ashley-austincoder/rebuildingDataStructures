var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //if head has not been initialized,
    //point head and tail to value
    if(!list.head){
      list.head = Node(value);
      list.tail = list.head;
    } else {
      //head and tail exist, so add .next to current tail
      //and repoint list.tail to the newly inserted node
      var newTail = Node(value)
      list.tail.next = newTail;
      list.tail = newTail;
    }
  };

  list.removeHead = function() {
    //save head value to return
    var removedHead = list.head.value;
    //repoint head to the next node
    list.head = list.head.next;

    return removedHead;
  };

  list.contains = function(target) {
    var check = list.head;
    //run while loop until reach tail(.next will be null)
    //checking every node starting from head and returning
    //true if target it found
    while(check){
      if(check.value === target){
        return true;
      }
      check = check.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
