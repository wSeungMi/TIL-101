import { useState } from "react";

const DiaryEditor = () => {
    // const [name, setName] = useState("");
    // const [content, setContent] = useState("");

    // 반복 구조로 사용되는 태그의 상태값을 한번에 사용하기
    // 문제는 setState에 값을 넣을 때 하나하나 할당해주면, 개수가 많아질 때 비효율적이다.
    // 그래서 스프레드 연산자를 사용!
    const [state, setState] = useState({
        name: "",
        content: "",
        emotion: "5",
    });

    // 위 방식도 개수가 많아지면 또 일일히 작성해줘야하는 단점이 존재한다.
    // 더 좋은 방식으로 개선하려면?
    const handleChangeState = (e) => {
        // console.log(e);
        // console.log(e.target.name);
        // console.log(e.target.value);
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        console.log(state);
        alert("저장 성공!");
    };

    console.log(state);

    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input
                    name="name"
                    type="text"
                    value={state.name}
                    onChange={handleChangeState}
                />
            </div>
            <div>
                <textarea
                    name="content"
                    value={state.content}
                    onChange={handleChangeState}
                ></textarea>
            </div>
            <div>
                오늘의 감정점수 :
                <select
                    name="emotion"
                    value={state.emotion}
                    onChange={handleChangeState}
                >
                    <option value={1}>😭</option>
                    <option value={2}>😢</option>
                    <option value={3}>🙂</option>
                    <option value={4}>😀</option>
                    <option value={5}>😆</option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>일기 저장하기</button>
            </div>
        </div>
    );
};

export default DiaryEditor;
