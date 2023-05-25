/**
 * 快慢指双针——删除链表的倒数第 N 个结点
 * 
给定一个链表: 1->2->3->4->5, 和 inverseNum = 2.
当删除了倒数第二个结点后，链表变为 1->2->3->5.
备注：给定的 inverseNum保证是有效的。
 */

const {arrayToLinkedList, ListNode} = require('../common/arrayToLinkedList');

/**
 * @param {ListNode 链表头} linkListHead
 * @param {number 倒数第几} inverseNum
 * @return {ListNode}
 */
const removeNthFromEnd = function(linkListHead, inverseNum) {
    // 初始化 dummy 结点
    const dummy = new ListNode()
    // dummy指向头结点
    dummy.next = linkListHead
    // 初始化快慢指针，均指向dummy
    let fast = dummy
    let slow = dummy

    // 快指针闷头走 inverseNum 步
    while(inverseNum !== 0){
        fast = fast.next
        inverseNum--
    }
    
    // 快慢指针一起走
    while(fast.next){
        fast = fast.next
        slow = slow.next
    }
    
    // 慢指针删除自己的后继结点
    slow.next = slow.next.next
    // 返回头结点
    return dummy.next
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let linkListHead = arrayToLinkedList(arr);
console.log(linkListHead);

let newList = removeNthFromEnd(linkListHead, 5);

console.log('newList:', newList);

