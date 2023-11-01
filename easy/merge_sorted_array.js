/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    if (m === 1 && m[0] === 0 && n === 1) nums1 = nums2
    else {
        for (let i = m, j = 0; i < nums1.length; i++, j++) {
            nums1[i] = nums2[j];
        };

        nums1.sort((a, b) => { return a - b });
    };
};