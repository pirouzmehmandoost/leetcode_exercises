// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
};

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums || nums.length === 0) return null;

    if (nums.length === 1){
        return new TreeNode(val=nums[0]);
    };  

    if (nums.length === 2) {
        const left=new TreeNode(val=nums[0]);
        return new TreeNode(val=nums[1],left);
    };

    let median = parseInt(nums.length/2);
    const root = new TreeNode(val=nums[median]);
    let left = sortedArrayToBST(nums.slice(0,median));
    
    root.left = left;
    let right = sortedArrayToBST(nums.slice(median+1,nums.length));
    root.right = right;

    return root;
};
