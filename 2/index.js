const input = require("./input")
const arr = input.split("\n").map(line => {
  const lineArr = line.split(" ")
  return {
    move: lineArr[0],
    amount: Number.parseInt(lineArr[1])
  }
})
const finalPos = {
  pos: 0,
  depth: 0,
}
arr.forEach(val => {
  if (val.move === "forward") finalPos.pos += val.amount
  if (val.move === "down") finalPos.depth += val.amount
  if (val.move === "up") finalPos.depth -= val.amount

})
console.log(finalPos, finalPos.pos * finalPos.depth)

const secondFinalPos = {
  pos: 0,
  depth: 0,
  aim:0,
}
arr.forEach(val => {
  if (val.move === "down") secondFinalPos.aim += val.amount
  if (val.move === "up") secondFinalPos.aim -= val.amount
  if (val.move === "forward") {
    secondFinalPos.pos += val.amount;
    secondFinalPos.depth += secondFinalPos.aim * val.amount;
  }
})
console.log(secondFinalPos, secondFinalPos.pos * secondFinalPos.depth)