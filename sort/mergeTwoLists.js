function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var mergeTwoLists = function (l1, l2) {
    const res = new ListNode(0);
    let p = res;
    let p1 = l1;
    let p2 = l2;
    while (p1 && p2) {
        if(p1.val < p2.val){
            p.next = p1;
            p1 = p1.next;
        } else {
            p.next = p2;
            p2 = p2.next;
        }
        p = p.next;
    }
    if(p1){
        p.next = p1;
    }
    if(p2){
        p.next = p2;
    }
    return res.next;
}
let l1 = [1,3,4];
let T1 = [];
while (l1 && l1.length) {
    let y1 = T1[0];
    T1.push(new ListNode(l1.pop(), y1));
}

let l2 = [1,2,4];
let T2 = [];
while (l2 && l2.length) {
    let y2 = T2[0];
    T2.push(new ListNode(l2.pop(), y2));
}

// console.log(T1);
let temp = mergeTwoLists(T1, T2);
console.log(temp);
