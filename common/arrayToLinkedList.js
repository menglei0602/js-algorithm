class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function arrayToLinkedList(arr) {
  if (!arr.length) {
    return null;
  }

  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let linkedList = arrayToLinkedList(arr);
console.log(linkedList);

module.exports = {
  arrayToLinkedList,
  ListNode
};