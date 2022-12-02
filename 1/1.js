const input = require("./input")
const arr = input.split("\n").map(item => Number.parseInt(item))

let count = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > arr[i - 1]) count++
}

console.log(count)

let max3 = 0;
const window = arr.reduce((acc, curr, index) => {
  max3 += curr;
  if (index > 1) {
    acc.push(curr + arr[index-1] + arr[index-2])
    max3 = 0
  }
  return acc
}, [])

count = 0

for (let i = 1; i < window.length; i++) {
  if (window[i] > window[i - 1]) count++
}

console.log(count)