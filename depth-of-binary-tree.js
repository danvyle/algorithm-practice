//-------Problem------
// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.


//-------Pseudocode --------
// I want to traverse down the tree by checking for root.left and root.rightch 
// I need to check for null and that there are values in the tree to BST to begin. 
// I want to check the left node first. Then the right node next and continue to traverse down if the node.left && node.right are not null.
// From there, I'll establish a count for every time I traverse to the next node. How will I determine this if the right node is longer. 




// -----code-------

var maxDepth = function(root) {
    if (root === null) {
        return 0;
    } else {
        let leftDepth = maxDepth(root.left);
        let rightDepth = maxDepth(root.right);
       
        if(leftDepth > rightDepth) {
            return leftDepth + 1;
        } else {
            return rightDepth + 1;
        }
    }
};

//------------complexity--------
// Time: O(n)
// Complexity: O(n)

// recursion