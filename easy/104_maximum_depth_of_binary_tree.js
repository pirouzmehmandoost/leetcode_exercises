// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    let count1 = root?.left ?  1 + maxDepth(root?.left) : 1;
    let count2 =  root?.right ? 1 +  maxDepth(root?.right) : 1;
    return count2 > count1? count2 : count1;
};
