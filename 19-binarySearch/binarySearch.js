class MySolution {
  constructor() {
    this.flag = false;
  }

  binarySearch(nums, target) {
    
  let startIndex = 0;
  let endIndex = nums.length - 1;


  while(startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);

    if(target === nums[middleIndex]) {
      return true;
    }

    if(target > nums[middleIndex]) {
      startIndex = middleIndex + 1;
    }

    if(target < nums[middleIndex]) {
      endIndex = middleIndex - 1;
    }
    
  }
  
  return false;

  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;