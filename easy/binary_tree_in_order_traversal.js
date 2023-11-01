/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
};


let arr = [];

const test = (root) => {

    if (root?.left) test(root.left);

    if (root?.val || root?.val === 0) arr.push(root.val);

    if (root?.right) test(root.right);

    return arr;
};


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = (root) => {
    if (arr.length > 0) arr = [];

    if (!root) return [];

    return test(root, arr);
};
