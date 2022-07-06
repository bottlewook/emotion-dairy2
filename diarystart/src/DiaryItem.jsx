const DiaryItem = ({ author, content, emotion, id, onRemove }) => {
  console.log("안녕");
  return (
    <div>
      <p>
        저자 : {author} | 내용 : {content}
      </p>
      <p>
        감정 : {emotion} | 아이디 : {id}
      </p>
      <button
        onClick={() => {
          onRemove(id);
        }}
      >
        삭제하기
      </button>
    </div>
  );
};

export default DiaryItem;
