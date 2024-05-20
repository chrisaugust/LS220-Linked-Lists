// PROBLEM 
// Given a singly linked list, remove every alternate node starting with the
// second.
//
// CODE
function ListNode(val) {
  this.val = val;
  this.next = null;
}

function printLinkedList(head) {
  let currentNode = head;
  let listStr = '';
  while (currentNode !== null) {
    listStr += currentNode.val + ' -> ';
    currentNode = currentNode.next;
  }
  listStr += 'null';
  console.log(listStr);
  return listStr;
}

function createLinkedList(arr) {
  let head = new ListNode(0);
  let current = head;
  arr.forEach(val => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return head.next;
}

function removeEverySecondNode(head) {
  let current = head;
  while (current && current.next) {
    current.next = current.next.next
    current = current.next;
  }
  return head;
}

// TESTS
let list1 = createLinkedList([1, 2, 3, 4, 5]);
let list2 = createLinkedList([1, 2]);
let list3 = createLinkedList([1]);
let list4 = createLinkedList([1, 2, 3, 4]);
let list5 = createLinkedList([]);

console.log(printLinkedList(removeEverySecondNode(list1)) === '1 -> 3 -> 5 -> null');
console.log(printLinkedList(removeEverySecondNode(list2)) ==='1 -> null');
console.log(printLinkedList(removeEverySecondNode(list3)) === '1 -> null');
console.log(printLinkedList(removeEverySecondNode(list4)) === '1 -> 3 -> null');
console.log(printLinkedList(removeEverySecondNode(list5)) === 'null');
