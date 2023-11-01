let findLargestIndex = function (arr, startIndex = 0, absoluteLargest = false) {
    let index = startIndex;

    for (let i = startIndex + 1; i < arr.length; i++) {

        if (arr[i] > arr[index]) {
            index = i;
        }
        if (absoluteLargest === false) break;
    };

    return index;
};


var trap = function (height) {
    let totalTrapped = 0;
    let largestIndex = 0;
    let nextLargestIndex = 0;
    let isPlateau = true;


    // base cases
    if (height.length <= 2) return 0;

    for (let i = 0; i < height.length; i++) {
        if (height[0] !== height[i]) {
            isPlateau = false;
            break;
        }
    }
    if (isPlateau) return 0;

    absoluteLargestIndex = findLargestIndex(height, 0, true);
    largestIndex = findLargestIndex(height, 0, false);

    for (let i = largestIndex + 1; i < height.length; i++) {
        nextLargestIndex = findLargestIndex(height, i, true);

        if (height[nextLargestIndex] < height[absoluteLargestIndex]) {
            absoluteLargestIndex = nextLargestIndex;
            largestIndex = nextLargestIndex;
        };

        if (height[i] < height[largestIndex]) {
            totalTrapped += height[largestIndex] - height[i];
        }
        else {
            largestIndex = i;
        };
    };

    return totalTrapped;
};
