// Your code here
const wrapAdjective = function (wrapper = "*") {
  return function (wrappedAdjective = "special") {
    return `You are ${wrapper}${wrappedAdjective}${wrapper}!`
  }
}

const saturdayFun = function (activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

const Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
}

const actionApplyer = (start, array) => {
  for (let i = 0; i < array.length; i++) {
    start = array[i](start)
  }

  return start
}