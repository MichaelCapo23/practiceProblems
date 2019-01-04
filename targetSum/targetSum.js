let arr = [1,2,2,2,5,6];
let target = 5;

function findAllMatches(arr, target) {
    debugger;
    const tar = target;
    let possibilities = arr.filter((tar, value) => arr[value] <= target);
    console.log(possibilities);
    var counter = 1;
    

}

findAllMatches(arr, target);