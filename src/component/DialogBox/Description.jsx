import { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import style from "./Descripition.module.css";
import { HiMenuAlt2 } from "react-icons/hi";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { description } from "../../store/ListSlice";
import { useDispatch, useSelector } from "react-redux";

function Description({ cardData }) {
  const list = useSelector((state) => state.ListSlice.list);
  const newList = list.find((item) => item.id === cardData.listId);
  const newTask = newList.task.find((item) => item.id === cardData.id);
  const descriptionContent = newTask.description;
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(descriptionContent);

  const [isEditBtnHide, setIsEditBtnHide] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (descriptionContent) {
      setIsEditBtnHide(true);
    }
  }, [descriptionContent]);

  function handleClick() {
    setIsEditing(true);
  }

  function handleSaveClick() {
    if (content) {
      setIsEditBtnHide(true);
      dispatch(description({ content, cardData }));
    } else {
      toast.warning("can not be empty");
    }
    setIsEditing(false);
  }

  // function handleCancleClick() {
  //   setIsEditing(false);
  //   setIsEditBtnHide(false);
  //   // setContent("");
  // }

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <>
      <div className={style.logoH1}>
        <ToastContainer position="top-center" autoClose="2000" />
        <div>
          <HiMenuAlt2 className={style.logo} />
        </div>
        <h2>Description</h2>
        {isEditBtnHide && (
          <Button
            sx={{
              textTransform: "capitalize",
              backgroundColor: "var(--ds-background-neutral,#091e420a)",
              color: "black",
            }}
            onClick={() => setIsEditing(true)}
          >
            Edit
          </Button>
        )}
      </div>
      <div>
        {isEditing ? (
          <div className={style.textAreaButtons}>
           
            <input
              type="text"
              value={content}
              onChange={handleContentChange}
              className={style.desText}
            />
            <div>
              <Button
                variant="contained"
                sx={{
                  width: "5rem",
                  textTransform: "capitalize",
                }}
                onClick={handleSaveClick}
              >
                Save
              </Button>
              {/* <Button
                sx={{
                  width: "5rem",
                  textTransform: "capitalize",
                }}
                onClick={handleCancleClick}
              >
                Cancel
              </Button> */}
            </div>
          </div>
        ) : (
          <>
            {!isEditBtnHide && (
              <div onClick={handleClick} className={style.DescriptionDiv}>
                Add a more detailed descripition...
              </div>
            )}
           {isEditing? '' : <div className={style.content}>
              {descriptionContent && descriptionContent}
            </div>}
          </>
        )}
      </div>
    </>
  );
}

export default Description;
