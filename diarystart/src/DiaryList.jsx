import DiaryItem from "./DiaryItem";

const DiaryList = ({ diaryList, onRemove }) => {
  return (
    <div className="DiaryList">
      <div>
        {diaryList.map((item) => (
          <DiaryItem key={item.id} {...item} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
