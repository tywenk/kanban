import React from "react";
import { useNavigate } from "react-router-dom";

function BoardCell({ name, id }) {
  let navigate = useNavigate();

  function handleBoardCellClick() {
    navigate(`/boards/${id}`);
  }

  return <div onClick={handleBoardCellClick}>{name}</div>;
}

export default BoardCell;
