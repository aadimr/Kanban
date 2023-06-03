import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import style from "./DashBoard.module.css";
import { useDispatch } from "react-redux";
import { addList, addTask } from "../store/ListSlice";
import { nanoid } from "nanoid";



export default function AddNew({ type, listId }) {
  const [input, setInput] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(true);

  const dispatch = useDispatch()

  function handleListInput(e) {
    setInput(e.target.value);
  }

  function handleAddList(e) {
    e.preventDefault();
    if (type && input) {
      dispatch(addTask({ id: nanoid(7), title: input, listId: listId, description: '', activity: [] }))
    } else
      if (input) {
        dispatch(addList({ id: nanoid(6), title: input }))
      } else {
        toast.warning('can not be empty!')
      }
    setInput('')
  }

  const btnName = () => {
    if (type) {
      return '+ Add a card'
    } else {
      return '+ Add a list'
    }
  }

  return (
    <div className={style.addbtndiv}>
 
      {isFormVisible ? (
        <Button
          onClick={() => setIsFormVisible(false)}
          className={style.addbtn}
          variant="text"

        >
          {btnName()}
        </Button>
      ) : (
        <div className={style.addList_div}>
          <form onSubmit={handleAddList}>
            {type ? <TextField value={input}
              sx={{
                backgroundColor: 'whitesmoke',
                zIndex: 9999
              }}
              onChange={handleListInput}
              placeholder="Add new card..." /> :
              <input type="text"
                value={input}
                onChange={handleListInput}
                placeholder="Enter list title"
                style={{ zIndex: 9999 }} />}
            <div className={style.crossbtn}>
              <Button
                sx={{ height: "30px", textTransform: "capitalize", zIndex: 9999 }}
                autoFocus={true}
                variant="contained"
                type='submit'

              >
                Add
              </Button>
              <CloseIcon onClick={() => setIsFormVisible(true)} sx={{ fontSize: '30px', color: 'black', cursor: 'pointer', zIndex: 9999 }} />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
