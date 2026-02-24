func sumRootToLeaf(root *TreeNode) int {
    return dfs(root, 0)
}

func dfs(node *TreeNode, curr int) int {
    if(node == nil) {
        return 0
    }

    curr = curr * 2 + node.Val

    if(node.Left == nil && node.Right == nil){
        return curr
    }

    return dfs(node.Left, curr) + dfs(node.Right, curr)
}