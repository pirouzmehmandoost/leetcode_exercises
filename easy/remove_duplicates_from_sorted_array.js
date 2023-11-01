let numDuplicates = 0;

const removeDuplicates = (nums) => {
  let duplicate = 101;
  let veryLastIndex = nums.length;

  for (let i = 0; i <= nums.length-1; i++) {
    for (let j = nums.length-1 ; j > i; j--) {
      if (nums[j] === nums[i]) {
        duplicate = nums[j];
        nums[j] = nums[j+1];
        veryLastIndex--;
      }; 
    };

    if (nums[i] === duplicate) {
      numDuplicates++;
    }
  }
    for (let i = nums.length-1; i >= 0; i--) {
        if (typeof nums[i] !== 'number') {nums.pop()}
    }
    return numDuplicates;
};
