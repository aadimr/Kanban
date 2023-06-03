import React from "react";
import style from "./Navbar.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RemoveAll from "../removeAll/RemoveAll";

export default function Navbar() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/changeImage");
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.h2}>
        <h2>Kanban Board</h2>
      </div>
      <div className={style.container}>
        <RemoveAll />
        <Button variant="contained" onClick={handleButtonClick}>
          Change Background
        </Button>
      </div>
    </div>
  );
}
