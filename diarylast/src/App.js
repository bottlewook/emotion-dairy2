import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import { useState, useRef } from "react";
function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const newItem = {
      author,
      content,
      emotion,
      id: dataId.current++,
    };
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    setData(
      data.filter((item) => {
        return item.id !== targetId;
      })
    );
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((item) => {
        return item.id === targetId ? { ...item, content: newContent } : item;
      })
    );
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit} />
    </div>
  );
}

export default App;
