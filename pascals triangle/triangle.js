function addCorrectDiv(numrows) {
    var count = 1;
    for(let i = 3; i <= numrows; i++) {
        console.log($(`.r${[i][count+1]}`));
        console.log($(`.r${[i][count+1]}`).val($(`.r${[i-1][count]}`).val() + $(`.r${[i-1][count+1]}`).val()));
        console.log($(`.r${[i - 1]}${[count]}`)[0]);
        // console.log(`.r${[i - 1]}${[count]}`);
    }
}

addCorrectDiv(4);