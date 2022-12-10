// ## Problem1: Minimum Path Form String formation
// https://leetcode.com/problems/shortest-way-to-form-string/

// Binary search
// TC: O(tlen log(slen))
// SC: O(slen)

// 2 pointer
// TC: O(mn)
// SC: O(1)

// Did this code successfully run on Leetcode : Yes
// Any problem you faced while coding this : No


// Your code here along with comments explaining your approach

// binary search to find the next index of the character in source
var binarySearch = (arr, low, high, target) => {
    console.log(arr, low, high, target)
    while (low <= high) {
        let mid = Math.floor(low + ((high - low) / 2));
        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }

    }
    return low < arr.length ? low : -1;
}
/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function (source, target) {

    let slen = source.length;
    let tlen = target.length;

    let map = new Map();
    for (let i = 0; i < slen; i++) {
        let ch = source[i];
        if (!map.has(ch)) {
            map.set(ch, new Array());
        }
        let arr = map.get(ch);
        map.set(ch, [...arr, i]);
    }

    let sp = 0, tp = 0, count = 1;
    while (tp < tlen) {
        if (!map.has(target[tp]))
            return -1;
        let arr = map.get(target[tp]);
        let foundSourceIndex = binarySearch(arr, 0, arr.length - 1, sp);
        console.log(foundSourceIndex);
        if (foundSourceIndex === -1) {
            count++;
            sp = 0;
        } else {
            sp = arr[foundSourceIndex] + 1;
            tp++;
        }
    }
    return count;


    // let sp = 0;
    // let tp = 0;
    // let found = false;
    // let count = 0;
    // while(tp<target.length){
    //     if(source[sp] === target[tp]){
    //         found = true;
    //         tp++;
    //     } 
    //     sp++;
    //     if(sp === source.length || tp === target.length){
    //         if(found === false){
    //             return -1;
    //         }
    //         found = false;
    //         sp = 0;
    //         count++;
    //     }
    // }
    // return count;
};
