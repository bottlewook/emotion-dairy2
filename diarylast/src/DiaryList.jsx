import DiaryItem from "./DiaryItem";
const DiaryList = ({ diaryList }) => {
  return (
    <div className="DiaryList">
      {diaryList.map((item) => {
        return <DiaryItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default DiaryList;
