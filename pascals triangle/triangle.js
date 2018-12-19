function addCorrectDiv(numrows) {
    count = 0;
    for(let i = 2; i <= numrows.length; i++) {
        $(`{.r[i+1][count+1]}`).val($(`{.r[i][count]}`).val()) ;
    }
}

addCorrectDiv(4);