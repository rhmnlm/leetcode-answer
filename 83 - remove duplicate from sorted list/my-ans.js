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
var deleteDuplicates = function(head) {
    let ans = new ListNode(0);
    let iteration = 0;

    let dummyNode = ans;

    while(head != null){
        if(iteration == 0){
            dummyNode.next = new ListNode(head.val);
            dummyNode = dummyNode.next;
            head = head.next;
            iteration++;
            continue;
        }

        if(dummyNode.val == head.val){
            head = head.next;
            continue;
        }

        dummyNode.next = new ListNode(head.val);
        dummyNode = dummyNode.next;        
        head = head.next;
    }

    return ans.next;
};