$(document).ready(startApp);

function startApp() {
    let input = [2,2,2,2,0,1];
    const answer = sortColors(input);
    console.log(answer);
}

function sortColors(nums) {
    const sortObject = {
        0: [],
        1: [],
        2: []
    }
    for ( let color = 0; color < nums.length; color++ ) {
        sortObject[nums[color]].push(nums[color]);
    }
    nums = [].concat(sortObject[0],sortObject[1], sortObject[2]);
    return nums;
}
