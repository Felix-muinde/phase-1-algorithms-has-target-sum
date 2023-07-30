function hasTargetSum(array, target) {
  // Write your algorithm here
  // Pseudocode:
  // 1. Create an empty set to store the elements encountered so far.
  // 2. Loop through each element in the array.
  // 3. For each element, calculate the difference between the target and the element.
  // 4. Check if the difference exists in the set.
  // 5. If the difference exists, it means we have found two elements that add up to the target, so return true.
  // 6. If the difference does not exist, add the current element to the set and continue the loop.
  // 7. If the loop completes without finding a matching pair, return false (no two elements add up to the target).

  const seenElements = new Set();

  for (const num of array) {
    const difference = target - num;
    if (seenElements.has(difference)) {
      return true;
    }
    seenElements.add(num);
  }

  return false;
}

/* 
  Big O Time Complexity: O(n)
  Explanation: The function iterates through each element in the 'array' exactly once, where 'n' represents the number of elements in the array. The operations inside the loop, such as adding elements to the set and checking for the existence of elements in the set, are constant-time operations. Therefore, the overall time complexity of the function is O(n).
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
