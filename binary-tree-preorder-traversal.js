var preorderTraversal = function (root, result = []) {
  if (root === null) return [];
  result.push(root.val);
  preorderTraversal(root.left, result);
  preorderTraversal(root.right, result);
  return result;
};
