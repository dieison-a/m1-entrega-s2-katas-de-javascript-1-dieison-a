function oneThroughTwenty() {
  let nums = []
  for (let i = 1; i <= 20; i++) {
      nums.push(i)
      }
  return nums.join(", ")
}
console.log(oneThroughTwenty())

function evensToTwenty() {
  let nums = []
  for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
      nums.push(i)
    }
  }
  return nums.join(", ")
}
console.log(evensToTwenty())

function oddsToTwenty() {
  let nums = []
  for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
      nums.push(i)
    }
  }
  return nums.join(", ")
}
console.log(oddsToTwenty())

function multiplesOfFive() {
  let nums = []
  for (let i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
      nums.push(i)
    }
  }
  return nums.join(", ")
}
console.log(multiplesOfFive())

function squareNumbers() {
  let nums = []
  for (let i = 1; i <= 100; i++) {
    if (Math.sqrt(i) % 1 == 0) {
      nums.push(i)
    }
  }
  return nums.join(", ")
}
console.log(squareNumbers())

function countingBackwards() {
  let nums = []
  for (let i = 20; i >= 1; i--) {
    nums.push(i)
  }
  return nums.join(", ")
}
console.log(countingBackwards())

function evenNumbersBackwards() {
  let nums = []
  for (let i = 20; i >= 1; i--) {
    if (i % 2 == 0) {
      nums.push(i)
    }
  }
  return nums.join(", ")
}
console.log(evenNumbersBackwards())

function oddNumbersBackwards() {
  let nums = []
  for (let i = 20; i >= 1; i--) {
    if (i % 2 != 0) {
      nums.push(i)
    }
  }
  return nums.join(", ")
}
console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards() {
  let nums = []
  for (let i = 100; i >= 1; i--) {
    if (i % 5 == 0) {
      nums.push(i)
    }
  }
  return nums.join(", ")
}
console.log(multiplesOfFiveBackwards())

function squareNumbersBackwards() {
  let nums = []
  for (let i = 100; i >= 1; i--) {
    if (Math.sqrt(i) % 1 == 0) {
      nums.push(i)
    }
  }
  return nums.join(", ")
}
console.log(squareNumbersBackwards())