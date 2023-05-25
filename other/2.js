// 翻转链表

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
let l1 = [1,2,3,4,5];
let p;
let head;
while (l1 && l1.length) {
    console.log('l1:', l1);
    p = new ListNode(l1.pop(), p);
    // if(l1.length === 4) {
    //     head = p;
    // }
}
console.log('p:', p);
console.log('head:', head);
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};