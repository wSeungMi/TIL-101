// 1. data.js 데이터 받아오기
import todo from "../data/data.js";

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
    todo.map((list) => {
        // <li> 요소 노드 생성
        const $li = document.createElement("li");
        $li.setAttribute("key", list.id);
        // 텍스트 노드 생성
        const liText = document.createTextNode(list.task);
        // 또는 textContent를 이용해서 요소 내의 텍스트에 접근하여 값을 추가하는 방법도 있음.
        // $listItem.textContent = todoItem.task;
        // 텍스트 노드를 $listItem 요소의 자식 노드로 추가
        $li.appendChild(liText);
        $listItem.appendChild($li);
    });
    console.log(todo);
};

// input eventhandler 함수
const onInput = (event) => {
    newTask = event.target.value;
};

// onclick eventhandler 함수
const handlerAddTodo = () => {
    if (!newTask) alert("할일을 입력해주세요🙌!");

    todo.push({ id: nextId, task: newTask, done: false });
    nextId++; // 객체 id 번호 증가
    $input.value = ""; // input value 초기화
    reloadTodoList();
};

// 할일 추가
// 1. 사용자 입력을 받아 변수에 저장하기
$input.addEventListener("input", onInput);

// 2. 등록하기 버튼을 누르면 todo 객체에 값 넣어주기
$button.addEventListener("click", handlerAddTodo);
