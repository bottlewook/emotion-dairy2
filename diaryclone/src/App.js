import { BrowserRouter, Route, Routes } from "react-router-dom"; // 라우터 설정 npm i react-router-dom@6
import "./App.css";

import Home from "./pages/Home";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import New from "./pages/New";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
