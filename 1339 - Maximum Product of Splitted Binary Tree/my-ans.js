/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxProduct = function(root) {

    let prefixSum = [];
    let totalSum = 0;

    const dfs = (root) => {
        if(!root) return 0;

        let left = dfs(root.left);
        let right = dfs(root.right);

        prefixSum.push(root.val + left + right);
        totalSum += root.val

        return root.val + left + right
    }

    dfs(root);
    let max = 0;

    for(const sum of prefixSum){
        max = Math.max(max, sum * (totalSum - sum))
    }

    const MOD = 10 ** 9 + 7

    return max % MOD
    
};