import "./App.css";

function App() {
  const today = new Date();
  const dateKor = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "narrow",
    day: "numeric",
    weekday: "narrow",
    // dateStyle: "full", // 위 옵션들과 같이 선언하면 에러남
  });
  const testArray = [
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
    ["테스트", "테스트2"],
  ];

  console.log("testArray: ", testArray);

  console.time("flat");
  const flatArray = testArray.flat();
  console.timeEnd("flat");

  console.time("concat");
  const concatArray = [].concat(...flatArray);
  console.timeEnd("concat");

  // console.log(test2);
  console.log("arr1: ", flatArray, "arr2:", concatArray);

  return (
    <>
      <h1>{dateKor}</h1>
    </>
  );
}

export default App;
