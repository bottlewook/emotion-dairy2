import { useState, useRef } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

function App() {
  const dataId = useRef(0);
  const [data, setData] = useState([]);

  const onCreate = (author, content, emotion) => {
    const newItem = {
      author,
      content,
      emotion,
      id: dataId.current++,
    };
    setData([...data, newItem]);
  };

  const onRemove = (targetId) => {
    const dataFilter = data.filter((item) => {
      return item.id !== targetId;
    });
    setData(dataFilter);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onRemove={onRemove} />
    </div>
  );
}

export default App;
