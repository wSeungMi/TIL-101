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
  return (
    <>
      <h1>{dateKor}</h1>
    </>
  );
}

export default App;
