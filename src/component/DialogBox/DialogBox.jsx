import React from 'react'
import Title from './Title'
import Description from './Description'
import Activity from './Activity'
import style from "./DialogBox.module.css"

import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector } from 'react-redux'

const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 700,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  overflow: 'scroll'
};

function DialogBox() {
    const [open, setOpen] = React.useState(true);
    const location = useLocation()
    // console.log(location.state.card);
   const navigate = useNavigate()
   const list = useSelector((state) => state.ListSlice.list)
   const listName = list.find((item) => item.id === location.state.card.listId)
   
  //  console.log(cardData);
    const handleClose = () => {
      setOpen(false)
      navigate('/')
    };
    // console.log(location);
  return (
    <div className={style.mainContainer}>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles}>
          <Typography id="modal-modal-description" sx={{ mt: 0 }}>
         <div>
         <Title title ={location.state.card.title} listName={listName.title} cardData = {listName.task[0]}/>
         </div>
     <div className={style.decription}>
     <Description cardData={location.state.card}/>
     </div>
     
      <Activity cardData={location.state.card}/>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default DialogBox;