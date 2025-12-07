/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let ans = null;
    while(head != null){
        let ansHead = new ListNode(head.val);
        tail = ans;
        ansHead.next = tail;
        ans = ansHead;
        head = head.next
    }

    return ans;
};