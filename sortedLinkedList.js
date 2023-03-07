class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SortedLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Insert a new node into the list
  insert(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else if (value < this.head.value) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next && current.next.value <= value) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
      if (!newNode.next) {
        this.tail = newNode;
      }
    }
    this.length++;
  }

  // Remove a node by its value
  remove(value) {
    if (!this.head) return null;
    let removedNode = null;
    if (this.head.value === value) {
      removedNode = this.head;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      this.length--;
    } else {
      let current = this.head;
      while (current.next && current.next.value !== value) {
        current = current.next;
      }
      if (current.next && current.next.value === value) {
        removedNode = current.next;
        current.next = current.next.next;
        if (!current.next) {
          this.tail = current;
        }
        this.length--;
      }
    }
    return removedNode;
  }

  // Return the list as an array
  toArray() {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

// Example usage
const list = new SortedLinkedList();
list.insert(3);
list.insert(1);
list.insert(4);
list.insert(2);
console.log(list.toArray()); // Output: [1, 2, 3, 4]
list.remove(3);
console.log(list.toArray()); // Output: [1, 2, 4]
