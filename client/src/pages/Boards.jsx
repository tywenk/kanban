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
      },
    })
      .then((r) => r.json())
      .then((r) => setBoards(r));
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
    // Create new member when board is created
    fetch("http://localhost:3000/members", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      //This needs to be dynamic, not sure how to grab user_id board_id
      body: JSON.stringify({ is_admin: true, board_id: 1, user_id: 1 }),
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
