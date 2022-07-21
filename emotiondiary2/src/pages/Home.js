import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import DiaryList from "../components/DiaryList";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";

const Home = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장`;
  }, []);
  const diaryList = useContext(DiaryStateContext);
  const [data, setData] = useState([]);

  const [curDate, setCurDate] = useState(new Date());

  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();

      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0,
        23,
        59,
        59
      ).getTime();

      setData(
        diaryList.filter(
          (item) => firstDay <= item.date && item.date <= lastDay
        )
      );
    }
  }, [diaryList, curDate]);

  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월 `;

  const decreastMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDay())
    );
  };

  const increastMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDay())
    );
  };

  return (
    <div>
      <MyHeader
        leftChild={<MyButton text={"<"} onClick={decreastMonth} />}
        headText={headText}
        rightChild={<MyButton text={">"} onClick={increastMonth} />}
      />
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;
