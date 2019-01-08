$(document).ready(startApp);

function startApp() {
    const input = [[true, false, true],[false, true, true],[false, false, false]];
    countBombs(input);
}

function countBombs(input) {
    for(let arr = 0; arr<3; arr++) {
        for(let index = 0; index < 3; index++) {
            let leftAndTop = -1;
            let rightAndBottom = 3;
                if(input[arr-1] === leftAndTop) {
                    checkTop(input[arr][index]);
                }
            }
        }
    }
}

function checkTop() {
    let leftAndTop = -1;
    let rightAndBottom = 3;
    
}

function checkMiddle() {
    let leftAndTop = -1;
    let rightAndBottom = 3;
}

function checkBottom() {
    let leftAndTop = -1;
    let rightAndBottom = 3;
}