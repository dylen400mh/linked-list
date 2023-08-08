import Node from "./Node.js";

const LinkedList = () => {
  // linked list starts empty
  let headNode = null;

  // get head node
  const head = () => {
    return headNode;
  };

  // get tail node
  const tail = () => {
    // start at head node
    let tail = head();

    // while the next node isn't null, search the next node
    while (tail.nextNode !== null) tail = tail.nextNode;

    return tail;
  };

  // add node to end of list
  const append = (value) => {
    // modify previous tail's next node to be the new tail with a pointer to null
    tail().nextNode = Node(value, null);
  };

  // add node to start of list
  const prepend = (value) => {
    // set new head node to point to the old head node
    headNode = Node(value, head());

    // send prepended node's next node to head
  };

  // return size of linked list
  const size = () => {
    // use some loop to iterate through and keep a counter?
    let size = 0;
    let currentNode = head();

    // if there is another node, increment counter and move to next node
    while (currentNode !== null) {
      currentNode = currentNode.nextNode;
      size++;
    }

    return size;
  };

  // get node at a specific index
  const at = (index) => {
    // start at index 0
    let currentIndex = 0;
    // start with head as current node
    let currentNode = head();

    // while the index is not reached, move to the next node
    while (currentNode !== null && currentIndex < index) {
      currentIndex++;
      currentNode = currentNode.nextNode;
    }

    // if index passed exceeds node size, return null
    if (index > currentIndex) return null;

    return currentNode;
  };

  // remove last element from list
  const pop = () => {
    let lastNode = tail();

    // traverse to node pointing to tail
    let currentNode = head();

    while (currentNode.nextNode !== lastNode)
      currentNode = currentNode.nextNode;

    // current node becomes new tail, points to null
    currentNode.nextNode = null;
  };

  // returns true/false if the value is in the linked list
  const contains = (value) => {
    let currentNode = head();

    // traverse linked list searching for value
    while (currentNode !== null && currentNode.value !== value) {
      currentNode = currentNode.nextNode;
    }

    // if value is found return true
    if (currentNode.value === value) return true;

    // otherwise return false
    return false;
  };

  // returns the index of the node containing value, or null if not found
  const find = (value) => {
    let currentNode = head();
    let currentIndex = 0;

    // traverse linked list searching for value
    while (currentNode !== null && currentNode.value !== value) {
      currentIndex++;
      currentNode = currentNode.nextNode;
    }

    // if value is found return its index
    if (currentNode.value === value) return currentIndex;

    // otherwise return null
    return null;
  };

  // returns string of linked list
  const toString = () => {
    let string = "";
    let currentNode = head();

    // while current node isn't null add it to string
    while (currentNode !== null) {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    // add null to end of string
    string += "null";

    return string;
  };

  // insert a new node with the provided value at the given index
  const insertAt = (value, index) => {
    let previousNode = null;
    let currentNode = head();
    let currentIndex = 0;

    // traverse through list until node at insertion index is reached or tail is reached
    while (currentNode !== null && currentIndex !== index) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    // Insert new node in between two pointer nodes
    previousNode.nextNode = Node(value, currentNode);
  };

  //removes the node at the given index
  const removeAt = (index) => {
    let previousNode = null;
    let currentNode = head();
    let currentIndex = 0;

    // traverse through list until node at insertion index is reached or tail is reached
    while (currentNode !== null && currentIndex !== index) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    // Remove node by setting the previous node's next node to the deleted node's next node
    previousNode.nextNode = currentNode.nextNode;
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

export default LinkedList;
