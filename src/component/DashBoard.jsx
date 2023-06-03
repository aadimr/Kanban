
import React, { useRef, useState } from "react";
import { deleteList, deleteTask, reorderList, editList, editTask } from "../store/ListSlice";
import { useDispatch, useSelector } from "react-redux";
import style from './DashBoard.module.css'
import DeleteIcon from "@mui/icons-material/Delete";
import Navbar from "./header/Navbar";
import AddNew from "./AddNew";
import Card from "./AddACard/Card";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";



export default function DashBoard({ selectedImage }) {

  const [editingListId, setEditingListId] = useState(null);

  const textRef = useRef(null)

  const list = useSelector((state) => state.ListSlice.list);
 
  const dispatch = useDispatch();

  function handleListDelete(item) {
    dispatch(deleteList(item.id));
    toast.success(`List ${item.title} deleted successfully.`);
  }

  function handleDeleteTask(task) {
    const listName = list.find((item) => item.id === task.listId);
    dispatch(deleteTask(task));
    toast.success(`Task ${task.title} from list ${listName.title} deleted successfully.`);
  }

  function handleToggleEdit(item) {
    setEditingListId(item.id);
  }

  function handleChangeBlur(itemId) {
    const updated = textRef.current.value;
    setEditingListId(null);
    dispatch(editList({ updated, itemId }));
  }


  const onDragEnd = (result) => {
    const { destination, source, type} = result;
    console.log(result);

    if (!destination) {
      return;
    }
    if(destination.droppableId === source.droppableId &&
      destination.index === source.index 
      ){
        return;
      }

    dispatch(reorderList(result));

      
    
   
  };

 

  const getListStyle = () => ({
    
  });
  
 
  return (
    <div className={style.dash_div}>
      <div className={style.image} style={{ backgroundImage: `url(${selectedImage})` }}>
        <Navbar />
        <ToastContainer position="top-center" autoClose={2000}  />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='list'  type="list">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} style={getListStyle()}>
                <div className={style.dash_containor}>
                  <div className={style.list_container}>
                    {list.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={style.cardBox}
                          >
                            <div className={style.list_card}>
                              <div className={style.listName}>
                                {editingListId === item.id ? (
                                  <input
                                    className={style.editInput}
                                    type="text"
                                    ref={textRef}
                                    autoFocus
                                    defaultValue={item.title}
                                    onBlur={() => handleChangeBlur(item.id)}
                                  />
                                ) : (
                                  <span onClick={() => handleToggleEdit(item)}>{item.title}</span>
                                )}
                                <div className={style.divicon} onClick={() => handleListDelete(item)}>
                                  <DeleteIcon className={style.icon} sx={{ fontSize: '20px', cursor: 'pointer' }} />
                                </div>
                              </div>
                              <div>
                                <Droppable droppableId={item.id.toString()} type="card">
                                  {(provided) => (
                                    <div {...provided.droppableProps} ref={provided.innerRef}>
                                      {item.task &&
                                        item.task.map((task, index) => (
                                          <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                                            {(provided) => (
                                              <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={style.card}
                                              >
                                                <Card cardData={task} handleDeleteTask={() => handleDeleteTask(task)} />
                                              </div>
                                            )}
                                          </Draggable>
                                        ))}
                                      {provided.placeholder}
                                    </div>
                                  )}
                                </Droppable>
                              </div>
                              <div className={style.cardBtn}>
                                <AddNew type="card" listId={item.id} />
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                  <div className={style.AddNewbtn}>
                    <AddNew />
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}




