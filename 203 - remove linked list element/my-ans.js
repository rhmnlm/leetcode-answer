/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(head == null) return null;

    let ans = new ListNode(0);
    let currNode = ans;
    
    while(head != null){
        if(head.val != val){
            currNode.next = new ListNode(head.val);
            currNode = currNode.next
        }
        head = head.next
    }
    return ans.next
};