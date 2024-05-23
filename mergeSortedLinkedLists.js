// PROBLEM
// Given two sorted singly linked lists, combine them into a single sorted
// linked list. The new list should be composed of nodes from the two 
// original lists and should also be sorted in ascending order.
//
// EXAMPLES
//
// [1, 3, 5], 
// [2, 4, 6] ===> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
//
// [], [1] ===> 1 -> null
//
// ALGORITHM
// create a dummy node
// compare the two current linked list values
// 
//
//
// CODE

function ListNode(val) {
  this.val = val;
  this.next = null;
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

function printLinkedList(head) {
  let current = head;
  let listStr = '';
  while (current !== null) {
    listStr += current.val + ' -> ';
    current = current.next;
  }
  listStr += 'null';
  console.log(listStr);
}

function mergeSortedLists(list1, list2) {
  // deal with empty lists
  if (!list1) return list2;
  if (!list2) return list1;

  // determine head of merged lists
  let head;
  if (list1.val < list2.val) {
    head = list1;
    list1 = list1.next;
  } else {
    head = list2;
    list2 = list2.next;
  }

  let current = head;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  current.next = list1 === null ? list2 : list1;

  return head;
}

// TESTS
let list1 = createLinkedList([1, 3, 5]);
let list2 = createLinkedList([2, 4, 6]);
printLinkedList(mergeSortedLists(list1, list2)); // Expected: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null

let list3 = createLinkedList([1, 2, 3]);
let list4 = createLinkedList([]);
printLinkedList(mergeSortedLists(list3, list4)); // Expected: 1 -> 2 -> 3 -> null

let list5 = createLinkedList([]);
let list6 = createLinkedList([1]);
printLinkedList(mergeSortedLists(list5, list6)); // Expected: 1 -> null

let list7 = createLinkedList([1, 5, 9]);
let list8 = createLinkedList([2, 4, 6, 8, 10]);
printLinkedList(mergeSortedLists(list7, list8)); // Expected: 1 -> 2 -> 4 -> 5 -> 6 -> 8 -> 9 -> 10 -> null

let list9 = createLinkedList([1, 2, 5]);
let list10 = createLinkedList([3, 6, 7]);
printLinkedList(mergeSortedLists(list9, list10)); // Expected: 1 -> 2 -> 3 -> 5 -> 6 -> 7 -> null

let list11 = createLinkedList([1,2,3]);
let list12 = createLinkedList([3, 4, 5]);
printLinkedList(mergeSortedLists(list11, list12)); // Expected: 1 -> 2 -> 3 -> 3 -> 4 -> 5 -> null
