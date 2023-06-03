import React, { useRef, useState } from 'react';
import { MdSubtitles } from 'react-icons/md';
import style from "./Title.module.css";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { editTask } from '../../store/ListSlice';
import { useDispatch } from 'react-redux';

const Title = ({ title, listName, cardData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [titleName, setTitleName] = useState(title)
  const textRef = useRef(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const handleHeadingClick = () => {
    setIsEditing(true);
  };

  const handleInputBlur = (cardData) => {
    const updated = (textRef.current.value)
    dispatch(editTask({ updated, cardData }))
    setTitleName(updated)
    setIsEditing(false);
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.iconH2}>
        <div><MdSubtitles className={style.icon} /></div>
        <div>


          {isEditing ? (
            <form>
              <input
                type="text"
                defaultValue={titleName}
                ref={textRef}
                onBlur={() => handleInputBlur(cardData)}
                autoFocus
              />
            </form>
          ) : (
            <h2 onClick={handleHeadingClick}>{titleName}</h2>
          )}
        </div>
        <div className={style.cross}>
          <CloseIcon onClick={() => navigate('/')} />
        </div>
      </div>
      <div className={style.p}>
        <p>In list <span className={style.titleName}>{listName}</span> </p>
      </div>
    </div>
  );
};

export default Title; 