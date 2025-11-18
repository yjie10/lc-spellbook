/* ListNode Class */
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/* Convert Array → Linked List */
function arrayToList(arr) {
  let dummy = new ListNode(0);
  let curr = dummy;

  for (let n of arr) {
    curr.next = new ListNode(n);
    curr = curr.next;
  }

  return dummy.next;
}

/* Convert Linked List → Array (for printing) */
function listToArray(head) {
  const result = [];

  while (head) {
    result.push(head.val);
    head = head.next;
  }

  return result;
}

/* ↑ Big thanks to GPT-sensei for the code above to support local testing ↑ */

const mergeTwoLists = function (list1, list2) {
  // Constraint: # of nodes in both lists: [0, 50]
  // Early exit
  if ((list1 || !list1) && !list2) return list1;
  else if (!list1 && list2) return list2;

  // You don't have to create these pointers and just update list1 & list2, I did for more intuitive names
  let head1 = list1, head2 = list2;

  let dummy = new ListNode(0), tail = dummy;

  while (head1 !== null && head2 !== null) {
    if (head1.val < head2.val) {
      tail.next = head1;
      head1 = head1.next;
    } else {
      tail.next = head2;
      head2 = head2.next;
    }
    tail = tail.next;
  }

  // Edge-case: when list1.length !== list2.length
  if (list1 !== null) tail.next = head1;
  else if (list2 !== null) tail.next = head2;

  return dummy.next;
}

/* Example Tests */
const tests = [
  { list1: [], list2: [], expected: [] },
  { list1: [1], list2: [], expected: [1] },
  { list1: [], list2: [1], expected: [1] },
  { list1: [1, 2, 4], list2: [1, 3, 4], expected: [1, 1, 2, 3, 4, 4] },
  { list1: [2], list2: [1], expected: [1, 2] },
];

for (let t of tests) {
  const l1 = arrayToList(t.list1);
  const l2 = arrayToList(t.list2);
  const result = listToArray(mergeTwoLists(l1, l2));

  console.log(
    JSON.stringify(result) === JSON.stringify(t.expected)
      ? "✔ PASS"
      : "❌ FAIL",
    "input:", t.list1, t.list2,
    "expected:", t.expected,
    "got:", result
  );
}
