$(document).ready(startApp);

function startApp() {
    const inputs = [7,3];
    let array = getCombos(inputs);
    console.log(array);
}

function getCombos(inputs) {
    let outputArray = [];
    const numberChars = [
        ['a','b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z'],
    ];
    const num1 = inputs[0];
    const num2 = inputs[1];
    if(num1 > 1 && num1 < 10 && num2 > 1 && num2 < 10) {
        const array1 = numberChars[num1 - 2];
        const array2 = numberChars[num2 - 2];
        for(let ArrayNum = 0; ArrayNum < array1.length; ArrayNum++) {
            for(let Index = 0; Index < array2.length; Index++) {
                const nextCombo = array1[ArrayNum] + array2[Index];
                outputArray.push(nextCombo);
            }
        }
    } else {
        console.log("invalid number combo");
    }
    return outputArray;
}

