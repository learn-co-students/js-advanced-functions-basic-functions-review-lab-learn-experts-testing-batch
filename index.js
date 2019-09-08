// Your code here //
function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

/// For hoisting to work, the function must be defined as a function declaration. ///

/// function expressions are not hoisted
let mondayWork = function(str = "go to the office"){
  return `This Monday, I will ${str}.`
}

function wrapAdjective(str = "*"){
  return function(string = "special"){
    return `You are ${str}${string}${str}!`
  }
}

const Calculator = {
  add: function(n1, n2) {
    return n1 + n2
  },
  subtract: function(n1, n2) {
    return n1 - n2
  },
  multiply: function(n1, n2) {
    return n1 * n2
  },
  divide: function(n1, n2) {
    return n1 / n2
  }
}

function actionApplyer(start, fnArray){
  if (fnArray.length === 0) return start
  fnArray.forEach(fn => start = fn(start))
  return start
}
