// Your code here
function saturdayFun(params = "roller-skate") {
  return `This Saturday, I want to ${params}!`
};

function mondayWork(params = "go to the office") {
  return `This Monday, I will ${params}.`
};

function wrapAdjective(params = "*") {
  return function (innerparams = "special") {
    return `You are ${params}${innerparams}${params}!`
  }
};