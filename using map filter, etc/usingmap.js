function mapfunction() {

    var arr = ["k", "l", "m", "l", "k", "p", "l", "m", "y", "p", "k", "m", "y", "y", "y"];
    var arrOfOnj = arr.reduce((accum, current) => { accum[current] ? accum[current]++ : accum[current] = 1; return accum}, {});
    console.log(arrOfOnj);
    let newArr = [];
    for(let key in arrOfOnj) {
        newArr.push(key, arrOfOnj[key])
    }
    const sortedArr = newArr.sort((a, b) => a[1] - b[1]);
    console.log("sorted", sortedArr);
    const Arrmapped = sortedArr.map(value => value[0]);
    console.log("arrmapped",Arrmapped);
    let lastarr = Arrmapped.filter(value => value !== undefined);
    console.log(lastarr)


}

mapfunction();