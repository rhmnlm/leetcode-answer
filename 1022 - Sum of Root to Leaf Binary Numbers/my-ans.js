var sumRootToLeaf = function(root) {
    const dfs = (node, curr) => {
        if(!node) return 0

        // times 2, due to each digit is the power of 2 in binary
        curr = curr * 2 + node.val

        if(!node.left && !node.right){
            return curr;
        }

        return dfs(node.left, curr) + dfs(node.right, curr)
    }

    return dfs(root, 0);
};