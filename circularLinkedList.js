class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      newNode.next = this.head;
      current.next = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  remove(value) {
    if (!this.head) return null;
    let current = this.head;
    let prev = null;
    while (current.next !== this.head) {
      if (current.value === value) {
        if (!prev) {
          let tail = this.head;
          while (tail.next !== this.head) {
            tail = tail.next;
          }
          this.head = current.next;
          tail.next = this.head;
        } else {
          prev.next = current.next;
        }
        this.length--;
        return current;
      }
      prev = current;
      current = current.next;
    }
    if (current.value === value) {
      if (current === this.head) {
        this.head = null;
      } else {
        prev.next = this.head;
      }
      this.length--;
      return current;
    }
    return null; // The value is not in the list
  }

  toArray() {
    let array = [];
    let current = this.head;
    do {
      array.push(current.value);
      current = current.next;
    } while (current !== this.head);
    return array;
  }
}

const circularLinkedList = new CircularLinkedList();
circularLinkedList.append(5);
circularLinkedList.append(15);
circularLinkedList.append(151);
circularLinkedList.append(1511);
circularLinkedList.remove(15);

console.log(circularLinkedList.toArray());
