const DiaryItem = ({ author, content, emotion, id }) => {
  return (
    <div className="DiaryItem">
      <div className="info">작성자 : {author}</div>
      <div className="content">{content}</div>
      <span>
        감정점수:{emotion} | 아이디:{id}
      </span>
    </div>
  );
};

export default DiaryItem;
