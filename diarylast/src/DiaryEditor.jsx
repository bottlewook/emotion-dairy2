import { useState, useRef } from "react";

const DiaryEditor = ({ onCreate }) => {
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const authorInput = useRef();
  const contentInput = useRef();

  const handleStateChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const addList = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert("입력성공");
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          placeholder="작성자를 입력해주세요."
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleStateChange}
        />
      </div>
      <div>
        <textarea
          placeholder="내용을 입력해주세요."
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleStateChange}
        />
      </div>
      <div>
        <span>감점점수 : </span>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleStateChange}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <button onClick={addList}>추가하기</button>
    </div>
  );
};

export default DiaryEditor;
