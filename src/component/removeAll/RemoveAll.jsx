import React from "react";
import { clearAll } from "../../store/ListSlice";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";


const RemoveAll = () => {
  
  const dispatch = useDispatch();

  const deleteAll = () => {
    dispatch(clearAll());
    setOpen(false);
  };

 

  return (
    <>
      <div>
        <Button variant="contained" onClick={deleteAll}>
          Clear All
        </Button>
       
      </div>
    </>
  );
};

export default RemoveAll;
