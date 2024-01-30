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

    // 삭제 버튼 추가
    // <li> 요소 노드에 button 요소 노드 생성
    const $deleteBtn = document.createElement("button");
    $deleteBtn.classList.add("delete_btn");
    $deleteBtn.insertAdjacentHTML(
      "afterbegin",
      '<i class="fa-solid fa-xmark fa-1g"></i>'
    );

    // 사용자가 삭제하려고 선택한 리스트 번호 받아오기
    $deleteBtn.addEventListener("click", () => {
      // 삭제 전에 한번 더 확인하기
      const isConfirmed = window.confirm("정말 삭제하시겠습니까?");

      if (isConfirmed) {
        deleteItem(list.id);
      } else {
        return;
      }
    });

    $li.appendChild($deleteBtn);
  });
};

// 삭제 함수
const deleteItem = (listId) => {
  // id값이 일치하는 객체를 제외하고 나머지 목록 받아오기
  const updateList = todo.filter((list) => list.id !== listId);
  setList(updateList);
  reloadTodoList();
};

// input eventhandler 함수
const onInput = (event) => {
  newTask = event.target.value;

  // enter key를 눌렀을 때도 handlerAddTodo() 실행하기
  if (event.key === "Enter") {
    handlerAddTodo(newTask);
  }
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
$input.addEventListener("keypress", onInput);

// 2. 등록하기 버튼을 누르면 todo 객체에 값 넣어주기
$button.addEventListener("click", handlerAddTodo);
