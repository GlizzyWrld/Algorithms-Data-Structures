/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;

    this.length++;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    let curr = this.head;
    
    if(!this.head) return null;

    if(this.head === this.tail) {
      let val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return val;
    }

   
    while (curr.next !== this.tail) {
      curr = curr.next;
    }

    let val = this.tail.val;
    this.tail = curr;
    this.tail.next = null;
    this.length--;
    return val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) return null;
    
    let val = this.head.val;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let curr = this.head;
    if (curr === null) return null;
    let count = 0;
    while (curr !== null && count !== idx) {
      curr = curr.next;
      count++;
    }
    return curr.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let curr = this.head;
    let count = 0;
    while (curr !== null && count !== idx) {
      curr = curr.next;
      count++;
    }
    if (curr === null) return null;
    curr.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val);
    let count = 0;
    let curr = this.head;

    if (idx < 0 || idx > this.length) return;
    if (idx === this.length) return this.push(val);
    if (idx === 0) return this.unshift(val);

    while (count !== idx -1) {
      curr = curr.next;
      count++;
    }

    newNode.next = curr.next;
    curr.next = newNode;
    
    this.length++;

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx === 0) return this.shift();

    let curr = this.head;
    let count = 0;

    while (curr !== null && count !== idx - 1) {
      curr = curr.next;
      count++;
    }

    if (curr === null || curr.next === null) return

    let rmvVal = curr.next.val;
    curr.next = curr.next.next;

    if (curr.next === null) this.tail = curr;
    this.length--;
    return rmvVal;

  }

  /** average(): return an average of all values in the list */

  average() {
    let sum = 0;
    let curr = this.head;

    if (!this.head) return 0;

    while(curr !== null) {
      sum += curr.val;
      curr = curr.next;
    }

    let avg = sum / this.length;
    return avg;
  }
}


let dogs = new LinkedList();

dogs.push("dex");
dogs.push("butch");
dogs.push("marsha");
dogs.push("victor");
dogs.unshift("coco");
dogs.push("bubbles");
// dogs.pop();

const res = dogs.removeAt(0);


console.log(res);
console.log(dogs);
module.exports = LinkedList;
