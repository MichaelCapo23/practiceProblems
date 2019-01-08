var count = 0;

function getNum() {
    let number = document.querySelector("#number").value;
    getConst(number);
}

// function getConst(num) {
//     var stringNum = num.toString();
//     var arrNum = Array.from(stringNum);
//     var stringNum = arrNum.join("");
//     var reverseNum = arrNum.reverse();
//     var newReverse = reverseNum.join("");
//     var newNum = stringNum - newReverse;
//     count++;
//     if( newNum !== 6174 && count < 20) {
//         console.log("newNum", newNum);
//         getConst(newNum);
//     }
// }

function getConst(number) {
    var stringNum = number.toString();
    var arrNumber = Array.from(stringNum);
    var newArrNumber = arrNumber.map(value => {return value});
    var sortedSecond = arrNumber.sort((a,b) => {return a-b});
    var sortedFirst = newArrNumber.sort((a, b) => {return b- a});
    sortedSecond = sortedSecond.join("");
    sortedFirst = sortedFirst.join("");
    var newNum = sortedFirst - sortedSecond;
    count++;
    if(newNum !== 6174 && count < 20) {
        getConst(newNum)
    } else {
        console.log("you got it!");
    }

}