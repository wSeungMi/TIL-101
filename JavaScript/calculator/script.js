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
