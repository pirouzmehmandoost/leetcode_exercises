/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const mergedArr = [...nums1, ...nums2].sort((a, b) => {
        if (a < b) return -1;
        else if (a > b) return 1;
        else return 0;
    });

    let halfLength = parseFloat(mergedArr.length / 2);
    let isEven = mergedArr.length % 2 === 0;

    let roughMedian = isEven ?
        (mergedArr[parseInt(mergedArr.length) / 2 - 1] + mergedArr[parseInt(mergedArr.length / 2)]) / 2
        :
        mergedArr[parseInt(halfLength)];

    switch (mergedArr) {
        case (roughMedian === 0 || mergedArr.length === 0): return 0;
        case (mergedArr.length === 1): return mergedArr[0];
        case (mergedArr.length === 2): return (mergedArr[0] + mergedArr[1]) / 2;
        case (mergedArr.length === 3): return mergedArr[1];
        default: return roughMedian;
    }

};
