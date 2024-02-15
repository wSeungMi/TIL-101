// 사용자가 선택한 값을 담을 변수들을 먼저 만들자.
let prevNum = 0;
let operator = "";
let nextNum = 0;
let result = 0;

// querySelector는 선택자와 일치하는 문서 내 '첫'번째 element를 반환한다.
const $button = document.querySelectorAll("button");
const $resetBtn = document.querySelector(".reset");
const $delBtn = document.querySelector(".del");
const $numsBtn = document.querySelectorAll(".nums");
const displayPrev = document.querySelector(".previous-operand");
const displayNext = document.querySelector(".current-operand");

$button.forEach((item) => {
  item.addEventListener("click", (e) => {
    const currentValue = e.target.textContent;
    const currentClassName = e.target.className;

    // 연산자가 비어있고, className이 nums면
    if (!operator && currentClassName === "nums") {
      displayPrev.textContent += currentValue;
      prevNum = Number(prevNum + currentValue);
    } else if (prevNum && !operator && currentClassName === "operator") {
      displayPrev.textContent += currentValue;
      operator = currentValue;
    } else if (operator && currentClassName === "nums") {
      displayNext.textContent += currentValue;
      nextNum = Number(nextNum + currentValue);
    } else if (nextNum && currentClassName === "result") {
      calculate(prevNum, operator, nextNum);
      displayPrev.textContent = "";
      displayNext.textContent = result;
    } else if (currentClassName === "reset") {
      displayPrev.textContent = "";
      displayNext.textContent = "";
      prevNum = 0;
      nextNum = 0;
      operator = "";
      result = 0;
    } else {
      alert("잘못된 입력입니다.");
    }
  });
});

const calculate = function (num1, operator, num2) {
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "−":
      result = num1 - num2;
      break;
    case "×":
      result = num1 * num2;
      break;
    case "÷":
      result = num1 / num2;
      break;
    default:
      break;
  }
};
