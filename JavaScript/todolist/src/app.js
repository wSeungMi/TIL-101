// 1. data.js 데이터 받아오기
import todo from "../data/data.js";

// 2. <ul></ul> 태그 안에 <li>todo data</li>를 추가하기 위해 <ul> 요소 선택
const $listItme = document.getElementById("todo_list");

// 3. 받아온 데이터 순회해서 <li> 요소 추가하기
todo.map((list) => {
    // <li> 요소 노드 생성
    const $li = document.createElement("li");
    $li.setAttribute("key", list.id);

    // 텍스트 노드 생성
    const liText = document.createTextNode(list.task);

    // 텍스트 노드를 $listItem 요소의 자식 노드로 추가
    $li.appendChild(liText);

    // $listItem.textContent = todoItem.task;
    $listItme.appendChild($li);
});
