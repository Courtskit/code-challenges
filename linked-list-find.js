// target value found in linked list ?

const findVal = (head, val) => {
  let current = head;
  while (current !== null) {
    if (current.val === val) {
      return true
    }
    current = current.next;
  }
  return false;
}


// recursive 

const linkedListFind = (head, val) => {
  if (head === null) return false;
  if (head.val === target) return true;
  return linkedListFind(head.next, val)
}
