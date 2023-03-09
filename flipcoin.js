// let temp = Math.round(Math.random())
// console.log(temp)
let hhcounter = 0;
let ttcounter = 0;
let htcounter = 0;
let thcounter = 0;
const coin1h = 0,
    coin1t = 1,
    coin2h = 2,
    coin2t = 3;
for (let i = 1; i < 101; i++) {
    let temp = Math.round(Math.random())
    let temp2 = Math.round(Math.random() + 1 * 2)

    if (temp == coin1h && temp2 == coin2h) {
        hhcounter++;
    }
    if (temp == coin1t && temp2 == coin2t) {
        ttcounter++;
    }
    if (temp == coin1h && temp2 == coin2t) {
        htcounter++;
    }
    if (temp == coin1t && temp2 == coin2h) {
        thcounter++;
    }

}
let hhcounterpercentage = hhcounter * 100 / 100;
let ttcounterpercentage = ttcounter * 100 / 100;
let htcounterpercentage = htcounter * 100 / 100;
let thcounterpercentage = thcounter * 100 / 100;
console.log("hhcounter", hhcounter)
console.log("ttcounter", ttcounter)
console.log("htcounter", htcounter)
console.log("thcounter", thcounter)
console.log("hhcounterpercentage%", hhcounterpercentage)
console.log("ttcounterpercentage%", ttcounterpercentage)
console.log("htcounterpercentage%", htcounterpercentage)
console.log("thcounterpercentage%", thcounterpercentage)