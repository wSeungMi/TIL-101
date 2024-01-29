// 1. data.js 데이터를 담을 배열 초기화
let todo = [];
let $input = document.querySelector("input");
let $button = document.querySelector("button");
let nextId = 1; // id값
let newTask = ""; // 새로운 할일

// 투두리스트 조회
// 2. <ul></ul> 태그 안에 <li>todo data</li>를 추가하기 위해 <ul> 요소 선택
const $listItem = document.getElementById("todo_list");

// 3. 받아온 데이터 순회해서 <li> 요소 추가하기
const reloadTodoList = () => {
  $listItem.innerHTML = "";

  // 리스트 렌더링
  todo.map((list) => {
    // <li> 요소 노드 생성
    const $li = document.createElement("li");
    $li.setAttribute("key", list.id);
    // <li>에 class 추가
    $li.classList.add("todo_item");
    // 텍스트 노드 생성
    const liText = document.createTextNode(list.task);
    // 텍스트 노드를 $listItem 요소의 자식 노드로 추가
    $li.appendChild(liText);
    $listItem.appendChild($li);
  });
};

// input eventhandler 함수
const onInput = (event) => {
  newTask = event.target.value;
};

// 기존 배열에 새로운 데이터를 복사하는 함수
const setList = (newTodo) => {
  todo = newTodo;
};

// onclick eventhandler 함수
const handlerAddTodo = () => {
  if (!newTask) alert("할일을 입력해주세요🙌!");

  // 새로운 투두 추가
  const newTodo = [...todo, { id: nextId, task: newTask, done: false }];
  setList(newTodo);
  nextId++; // 객체 id 번호 증가
  $input.value = ""; // input value 초기화
  reloadTodoList();
};

// 할일 추가
// 1. 사용자 입력을 받아 변수에 저장하기
$input.addEventListener("input", onInput);

// 2. 등록하기 버튼을 누르면 todo 객체에 값 넣어주기
$button.addEventListener("click", handlerAddTodo);
