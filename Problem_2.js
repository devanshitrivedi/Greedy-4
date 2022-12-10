// ## Problem2:  Equal Row From Minimum Domino Rotations 
// https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/

// Time Complexity : O(n)
// Space Complexity : O(1)
// Did this code successfully run on Leetcode : Yes
// Any problem you faced while coding this : No


// Your code here along with comments explaining your approach

/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function (tops, bottoms) {
    if (tops === null || tops.length === 0 || bottoms === null || bottoms.length === 0)
        return 0;
    // Target will be either tops[0] or bottoms[0]
    let value = findMinRotation(tops, bottoms, tops[0]);
    if (value === -1) {
        return findMinRotation(tops, bottoms, bottoms[0]);
    }
    return value;
};
var findMinRotation = (tops, bottoms, target) => {
    let topRotation = 0;
    let bottomRotation = 0;
    for (let i = 0; i < tops.length; i++) {
        if (tops[i] !== target && bottoms[i] !== target) {
            return -1;
        }
        if (tops[i] !== target) {
            topRotation++;
        } else if (bottoms[i] !== target) {
            bottomRotation++;
        }
    }
    return Math.min(topRotation, bottomRotation);
}
