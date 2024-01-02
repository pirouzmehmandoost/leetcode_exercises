  function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    };

  function height(root) {
        if (!root) return 0;
        let lheight = height(root.left);
        let rheight = height(root.right);
 
        if (lheight < rheight) return (lheight + 1)
        else return (rheight + 1);
  };


var followPath = function(root) {
    if (!root) return 0;
    let lCounter = (1 + followPath(root.left));
    let rCounter = (1 + followPath(root.right));

    if (lCounter === rCounter ) return lCounter;
    if (lCounter === 1 && rCounter !== 1) return rCounter;
    if (lCounter !== 1 && rCounter === 1) return lCounter;
    if (lCounter < rCounter) return lCounter;
    else return rCounter;
};


var minDepth = function(root) {
    if (!root) return 0;
    return followPath(root);
};
