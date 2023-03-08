// let temp = Math.round(Math.random())
// console.log(temp)
let headcounter = 0;
let tellcounter = 0;
for (let i = 1; i < 11; i++) {
    let temp = Math.round(Math.random())
    console.log("result", temp);
    if (temp == 0) {
        headcounter++;

    }
    if (temp == 1) {
        tellcounter++;

    }
}
let headcounterpercentage = headcounter * 100 / 10;
let tellcounterpercentage = tellcounter * 100 / 10;
console.log(headcounter)
console.log(tellcounter)
console.log(headcounterpercentage, "%")
console.log(tellcounterpercentage, "%")