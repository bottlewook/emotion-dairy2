import DiaryItem from "./DiaryItem";
const DiaryList = ({ diaryList, onRemove, onEdit }) => {
  return (
    <div className="DiaryList">
      {diaryList.map((item) => {
        return (
          <DiaryItem
            key={item.id}
            {...item}
            onRemove={onRemove}
            onEdit={onEdit}
          />
        );
      })}
    </div>
  );
};

export default DiaryList;
