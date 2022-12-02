const input = require("./input");

const line = input.split("\n");

const gammaAndEpsilon = [];

// for (let i = 0; i < 12; i++) {
//   gammaAndEpsilon.push({zero: 0, one: 0})
// }



line.forEach((item) => {
  for (let i = 0; i < 12; i++) {
    if (!gammaAndEpsilon[i]) gammaAndEpsilon.push({ zero: 0, one: 0 });
    if (item[i] === "0") gammaAndEpsilon[i].zero += 1;
    if (item[i] === "1") gammaAndEpsilon[i].one += 1;
  }
});

let gamma = ""
let epsilon = ""

gammaAndEpsilon.forEach(item => {
  
    gamma += item.zero > item.one ? "0" : "1"
    epsilon += item.zero < item.one ? "0" : "1"
  
})

const newGamma = Number.parseInt(gamma, 2)
const newEpsilon = Number.parseInt(epsilon, 2)

console.log("First Answer: ", newGamma * newEpsilon);

console.log(gammaAndEpsilon)