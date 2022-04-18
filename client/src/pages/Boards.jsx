import { useEffect, useState } from "react";
import BoardCell from "../components/BoardCell";

import AddBoardForm from "../components/AddBoardForm";

function Boards() {
  const [boards, setBoards] = useState([]);
  const [showAddBoard, setShowAddBoard] = useState(false);

  let initialAddBoardFormState = {
    name: "",
  };

  const [addBoardFormState, setAddBoardFormState] = useState(
    initialAddBoardFormState
  );

  useEffect(() => {
    fetch("http://localhost:3000/boards", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((r) => setBoards(r));

    fetch("http://localhost:3000/authorize_user", {
      method: "GET",
      // credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then(console.log);
  }, []);

  function handleShowAddBoard() {
    setShowAddBoard(!showAddBoard);
  }

  function handleAddBoard() {
    fetch("http://localhost:3000/boards", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(addBoardFormState),
    });
  }

  const boardCells = boards.map((board) => (
    <BoardCell key={board.name + board.id} name={board.name} id={board.id} />
  ));

  return (
    <div>
      {boardCells}
      {showAddBoard ? (
        <AddBoardForm
          addBoardFormState={addBoardFormState}
          setAddBoardFormState={setAddBoardFormState}
          handleAddBoard={handleAddBoard}
        />
      ) : null}
      <button onClick={handleShowAddBoard}> Add Board </button>
    </div>
  );
}

export default Boards;
