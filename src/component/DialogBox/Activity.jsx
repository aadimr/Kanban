import React from 'react'
import style from "./Activity.module.css"
import { useState, useRef } from 'react'
import { Button } from '@mui/material'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { RxActivityLog } from 'react-icons/rx';
import DOMPurify from 'dompurify';
import Avatar from '@mui/material/Avatar';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ToastContainer, toast } from 'react-toastify';
import Parser from 'html-react-parser';
import { activity,deleteActivity } from '../../store/ListSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';


export default function Activity({cardData}) {
  const updatedCommentData = JSON.parse(localStorage.getItem("commentData")) || []
  const list = useSelector((state) => state.ListSlice.list);
  const newList = list.find((item) => item.id === cardData.listId);
  const newTask = newList.task.find((item) => item.id === cardData.id);
  const activityData = newTask.activity
  const [text, setText] = useState("")
  
  const [isEditing, setIsEditing] = useState(false);
  const [showAndHideDetailes, setshowAndHideDetailes] = useState("Hide detailes")
 
  const dispatch = useDispatch()
  

  function handleClick() {
    setIsEditing(true)
  }

  function handleSaveClick() {
    if (text) {
      var today = new Date();
      var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date + ' ' + time;
    
     dispatch(activity({id: nanoid(4) ,comment: text, time: dateTime, cardData: cardData}))
    
     
    } else {
     
      toast.warning('can not be empty')
    }
    setText("")
    setIsEditing(false)
  }

  const handleChange = (e) => {
    setText(e.target.value);
  };

  function handleClickDelete(id) {
    dispatch(deleteActivity({id:id, cardData: cardData}))
    toast.success('activity deleted successfully')
  }

  function handleShowAndHideComments() {
    let result = showAndHideDetailes === "Hide detailes" ? "Show detailes" : "Hide detailes"
    setshowAndHideDetailes(result)
  }

 

  const getTextFromHTML = (html) => {
    const parsedHtml = Parser(html);
    return parsedHtml;
  };


 
 

  return (
    <div className={style.mainContainer}>

      <div className={style.iconH2Button}>
        <div className={style.iconeH2}>
          <RxActivityLog className={style.logo} />
          <h2>Activity</h2>
        </div>
        <div>
          <Button variant='contained'
            onClick={handleShowAndHideComments}
            sx={{
              textTransform: "capitalize",
              backgroundColor: "var(--ds-background-neutral,#091e420a)",
              color: "black",

            }}>{showAndHideDetailes}</Button>
        </div>
      </div>
      {isEditing ? (
        <div className={style.textAreaButton}>
         
          <input type='text' className={style.reactQuill} value={text} onChange={handleChange}/>
          <Button variant='contained' onClick={handleSaveClick} sx={{
        
            width: "5rem",
            textTransform: "capitalize",
     
          }}>Save</Button>
        </div>
      )
        :
        <div className={style.avatar}>
          <Avatar src="/broken-image.jpg" />
          <div onClick={handleClick} className={style.activityDiv}>Write a comment...</div>
        </div>
      }
      {activityData &&  activityData.map((ele, index) => {
        return <div key={index} className={style.commentsEditAndDelete}>
          {showAndHideDetailes === "Hide detailes" ? <>
          <div className={style.timeAndDelete}>
          <Avatar src="/broken-image.jpg" />
          <div className={style.h3}><h3 >Adarsh</h3></div>
            <div className={style.time}> {ele.time}</div>
            <div className={style.Delete}>
              <div onClick={() => handleClickDelete(ele.id)}><DeleteForeverIcon/></div>
              </div>
            </div>
            <div>
          <div className={style.comments}>{getTextFromHTML(ele.comment)}</div>
          </div>
            </> : null}
        </div>
      })}
    </div>
  )
}
