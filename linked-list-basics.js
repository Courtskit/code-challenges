class LinkedList {
  
  constructor(val) {
    this.head = new Node(val)
  }

  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value)
      current = current.next
    }
  }

  addLast (val) {
    let current = this.head;
    while (current.next !== null) {
      current = current.next
    }
    current.next = new Node(val)
  }

  addFirst (val) {
    let newFirst = new Node(val);
    newFirst.next = this.head;
    this.head = newFirst;
  }

  contains (val) {
    let current = this.head;
    while (current !== null) {
      if (current.value === val) {
        return true;
      } 
      current = current.next
    }
    return false;
  }

}


class Node  {

  constructor(val) {
    this.value = val;
    this.next = null; 
  }

}


let listOne = new LinkedList(8)

// listOne.head.next = new Node(7)

// listOne.head.next.next = new Node(6)

// listOne.head.next.next.next = new Node(4)

listOne.addLast(7);
listOne.addLast(6);
listOne.addLast(5);
listOne.addFirst(9);
console.log(listOne.contains(5));

listOne.print();