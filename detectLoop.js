// PROBLEM 
// GIven the starting node of a singly linked list, determine
// whether the linked list contains a loop, or a cycle. This 
// is the case when a node can be revisited by continuously 
// following the next pointers.
//
// Return true if the linked list forms a loop, false otherwise.
//
// EXAMPLES
// 3 -> 2 -> 0 -> -4 
//      ^          |
//      |__________v  ===> true
// 
// 1 -> 2
// ^    |   ===> true
// |____|     
//
// 1 -> null   ===> false
//
// ALGORITHM
// slow pointer moves ahead one element at a time,
// fast pointer moves ahead two elements at a time
//
// while fast and fast.next aren't pointing to null:
//  increment pointers
//  check if pointers reference same element; return true if they do
//
// return false 
//
// CODE

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createLinkedList(arr, cyclePos) {
  let head = new ListNode(0);
  let current = head;
  let cycleNode = null;

  arr.forEach((val, index) => {
    current.next = new ListNode(val);
    current = current.next;
    if (index === cyclePos) {
      cycleNode = current;
    }
  });

  if (cycleNode) {
    current.next = cycleNode;
  }

  return head.next;
}

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

// TESTS
let list1 = createLinkedList([3, 2, 0, -4], 1);
let list2 = createLinkedList([1, 2], 0);
let list3 = createLinkedList([1], -1);
let list4 = createLinkedList([10, 20, 30, 40, 50, 60], 3);
let list5 = createLinkedList([5, 15, 25, 35, 45], -1);

console.log(hasCycle(list1) === true);
console.log(hasCycle(list2) === true);
console.log(hasCycle(list3) === false);
console.log(hasCycle(list4) === true);
console.log(hasCycle(list5) === false);
