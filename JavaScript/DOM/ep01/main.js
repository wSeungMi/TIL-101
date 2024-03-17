// document.body.innerHTML = "<h1>Hi!</h1>";

const h1 = document.createElement("h1");
h1.innerText = "hello!";
h1.style.color = "red";
h1.style.fontWeight = "bold";
document.body.appendChild(h1);
document.body.prepend(h1);

// document.querySelector("#app").innerHTML = `
//   <p>Hello1</p>
//   <p>Hello2</p>
//   <p>Hello3</p>
// `;

// return 결과는 NodeList
// NodeList는 Array가 아니다. 이터러블 객체이다.
// 그래서 유사배열객체로 만들어줘야 배열의 메서드를 사용할 수 있다.
// console.log(document.querySelectorAll("p"));
