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

    // 버튼 wrapper 생성
    const $buttonWrapper = document.createElement("div");
    $buttonWrapper.classList.add("button_wrapper");

    // 삭제 버튼 추가
    // <li> 요소 노드에 button 요소 노드 생성
    const $deleteBtn = document.createElement("button");
    $deleteBtn.classList.add("delete_btn");
    $deleteBtn.insertAdjacentHTML(
      "beforeend",
      '<i class="fa-solid fa-xmark fa-1g"></i>'
    );

    // 사용자가 삭제하려고 선택한 리스트 번호 받아와서 함수 실행
    $deleteBtn.addEventListener("click", () => {
      // 삭제 전에 한번 더 확인하기
      const isConfirmed = window.confirm("정말 삭제하시겠습니까?");

      if (isConfirmed) {
        deleteItem(list.id);
      } else {
        return;
      }
    });

    // 수정 버튼 추가
    const $editBtn = document.createElement("button");
    $editBtn.classList.add("edit_btn");
    $editBtn.insertAdjacentHTML(
      "afterbegin",
      '<i class="fa-solid fa-pen-to-square"></i>'
    );

    // 사용자가 수정하려고 선택한 리스트 번호 받아와서 함수 실행
    $editBtn.addEventListener("click", (e) => {
      editItem(e, list.id);
    });

    $buttonWrapper.appendChild($editBtn);
    $buttonWrapper.appendChild($deleteBtn);
    $li.appendChild($buttonWrapper);
  });
};

// 수정 함수
const editItem = (e, listId) => {
  // 수정하기 버튼을 클릭한 li 찾기
  if (e.target.classList.contains("fa-pen-to-square")) {
    // 버튼과 가장 인접한 li 요소 찾기
    const $selectLi = e.target.closest("li");
    // 텍스트 자리에 input 요소 노드 추가
    const $newInput = document.createElement("input");
    $newInput.classList.add("edit_input");

    if ($selectLi) {
      // 현재 li에 있는 텍스트 가져오기
      const liTextContent = $selectLi.textContent;
      // 기존 텍스트 지워주기
      $selectLi.textContent = "";

      // 새로 생성한 input에 value값으로 기존 텍스트값 넣어주기
      $newInput.setAttribute("value", liTextContent);

      // 버튼 wrapper 생성
      const $buttonWrapper = document.createElement("div");
      $buttonWrapper.classList.add("button_wrapper");

      // 입력 취소 버튼 추가
      const $cancleBtn = document.createElement("button");
      $cancleBtn.classList.add("cancle_btn");
      $cancleBtn.insertAdjacentHTML(
        "afterbegin",
        '<i class="fa-solid fa-xmark fa-1g"></i>'
      );

      $cancleBtn.addEventListener("click", reloadTodoList);

      // 수정 완료 버튼 추가
      const $editDoneBtn = document.createElement("button");
      $editDoneBtn.classList.add("edit_done_btn");
      $editDoneBtn.insertAdjacentHTML(
        "afterbegin",
        '<i class="fa-solid fa-check"></i>'
      );

      // 수정 완료 버튼을 클릭하면, id값이 일치하는 데이터에 수정된 데이터를 다시 넣어준다.
      $editDoneBtn.addEventListener("click", () => {
        if (listId && $newInput.value !== "") {
          // 기존 todo 목록을 가져와서 수정된 데이터로 업데이트 된 새 배열을 반환한다.
          const newEditTodo = todo.map((list) =>
            list.id === listId ? { ...list, task: $newInput.value } : list
          );
          setList(newEditTodo);
          reloadTodoList();
        } else {
          alert("할일을 입력해주세요🙌!");
          return;
        }
      });

      $buttonWrapper.appendChild($editDoneBtn);
      $buttonWrapper.appendChild($cancleBtn);
      $selectLi.appendChild($newInput);
      $selectLi.appendChild($buttonWrapper);
    }
  }
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
    if (event.isComposing) return;
    handlerAddTodo(newTask);
  }
};

// 기존 배열에 새로운 데이터를 복사하는 함수
const setList = (newTodo) => {
  todo = newTodo;
};

// onclick eventhandler 함수
const handlerAddTodo = () => {
  if (!newTask) {
    alert("할일을 입력해주세요🙌!");
    return;
  }

  // 새로운 투두 추가
  const newTodo = [...todo, { id: nextId, task: newTask, done: false }];
  setList(newTodo);
  nextId++; // 객체 id 번호 증가
  $input.value = ""; // input value 초기화
  newTask = ""; // newTask value 초기화
  reloadTodoList();
};

// 할일 추가
// 1. 사용자 입력을 받아 변수에 저장하기
$input.addEventListener("keydown", onInput);

// 2. 등록하기 버튼을 누르면 todo 객체에 값 넣어주기
$button.addEventListener("click", handlerAddTodo);
