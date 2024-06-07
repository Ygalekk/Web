class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function sumOfAllNodes(root) {
    if (!root) {
        return 0;
    }
    return root.val + sumOfAllNodes(root.left) + sumOfAllNodes(root.right);
}

const root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(10)),
    new TreeNode(3,
        null,
        new TreeNode(6)));

console.log(sumOfAllNodes(root));