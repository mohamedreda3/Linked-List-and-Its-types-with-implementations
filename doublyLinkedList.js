class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  remove(value) {
    if (!this.head) return null;
    let current = this.head;
    let prev = null;
    while (current.value != value) {
      if (!current.next) return null;
      prev = current;
      current = current.next;
    }

    if (current == this.head) {
      this.head = this.head.next;
      this.head.prev = null;
    } else if (current == this.tail) {
      this.tail.prev = null;
      this.tail = prev;
      this.tail.next = null;
    } else {
        prev.next = current.next;
    }
    this.length--;
  }

  toArray() {
    let array = [];
    let current = this.head;
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }
}

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.append(5);
doublyLinkedList.append(15);
doublyLinkedList.append(151);
doublyLinkedList.prepend(1511);
doublyLinkedList.remove(1511);

console.log(doublyLinkedList.toArray());
