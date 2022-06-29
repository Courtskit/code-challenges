// linked list values to array

const linkedListValues = (head) => {
  const values = [];
  let current = head;
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  return values;
}


// linked list values to array, recursive

const linkedListValuesRecursive = (head) => {
  const values = [];
  fillVals(head, values);
  return values;
};

const fillVals = (head, values) => {
  if (head === null) return;
  values.push(head.val);
  fillVals(head.next, values);
};