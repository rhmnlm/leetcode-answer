/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let v = head;
    let arr = [];

    while(v != null){
        arr.push(v.val);
        v = v.next;
    }

    let dummyNode = new ListNode();
    let curr = dummyNode;

    for(let i = 0; i < arr.length; i++){
        if(i == arr.length - n) continue;
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }

    return dummyNode.next;
};

/**
while(v != null){
        console.log(v.val);
        v = v.next;
    } 
*/