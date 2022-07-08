import { useRef } from "react";
import { useState } from "react";

const DiaryItem = ({ author, content, emotion, id, onRemove, onEdit }) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  const cancleEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  const enterEdit = () => {
    window.confirm(`${id}번쨰 아이디를 삭제하시겠습니까?`);
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }
    onEdit(id, localContent);
    toggleIsEdit();
  };

  return (
    <div className="DiaryItem">
      <div className="info">작성자 : {author}</div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(event) => {
                setLocalContent(event.target.value);
              }}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>
      <span>
        감정점수:{emotion} | 아이디:{id}
      </span>
      <div>
        {isEdit ? (
          <>
            <button onClick={enterEdit}>수정완료</button>
            <button onClick={cancleEdit}>수정취소</button>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                onRemove(id);
              }}
            >
              삭제하기
            </button>
            <button onClick={toggleIsEdit}>수정하기</button>
          </>
        )}
      </div>
    </div>
  );
};

export default DiaryItem;
