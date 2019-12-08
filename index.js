// Your code here
const saturdayFun = (activity = 'roller-skate') => {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = (activity = 'go to the office') => {
    return `This Monday, I will ${activity}.`
}

const wrapAdjective = (arg = "*") => {
    return function(adj = "special"){
        return `You are ${arg}${adj}${arg}!`
    }
}

const Calculator = {
    add: (num1, num2) => {
        return num1 + num2
    },

    subtract: (num1, num2) => {
        return num1 - num2
    },

    multiply: (num1, num2) => {
        return num1 * num2
    },

    divide: (num1, num2) => {
        return num1 / num2
    }
}

const actionApplyer = (int, array) => {
    if(array.length === 0) return int
    let work = int
    array.forEach(cb => {
        work = cb(work)
    });

    return work
}