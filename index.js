// code your solution here
function saturdayFun(arg) {
  return arg
    ? `This Saturday, I want to ${arg}!`
    : "This Saturday, I want to roller-skate!";
}

(function () {
  console.log("Yet more razzling");
});

const mondayWork = function (work) {
  return work
    ? `This Monday, I will ${work}.`
    : `This Monday, I will go to the office.`;
};

const wrapAdjective = function wrapAdjective(arg = "!!!") {
  return function (end) {
    return `You are ${arg}${end}${arg}!`;
  };
};

wrapAdjective("%")("a dedicated programmer"); //=> "You are %a dedicated programmer%!"
