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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R, sum = 0) {
  if (root === null) return 0;
  let rootVal = 0
  if (root.val <= R && root.val >= L) {
      rootVal = root.val;
  }
  return rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R, sum) + rootVal
};