import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import UpdateBoardForm from "../components/UpdateBoardForm";

function Board() {
  let { id } = useParams();
  const [board, setBoard] = useState([]);
  const [showUpdateBoard, setShowUpdateBoard] = useState(false);

  let initialUpdateFormState = {
    name: "",
  };

  const [updateFormState, setUpdateFormState] = useState(
    initialUpdateFormState
  );

  useEffect(() => {
    fetch(`http://localhost:3000/boards/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((r) => setBoard(r))
      .then(console.log(board));
  }, []);

  function handleDeleteBoard() {
    fetch(`http://localhost:3000/boards/${id}`, {
      method: "DELETE",
    }).then((r) => r.json());
  }

  function handleUpdateBoard() {
    event.stopPropagation();
    fetch(`http://localhost:3000/boards/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/JSON",
        accept: "application/JSON",
      },
      body: JSON.stringify(updateFormState),
    });
  }

  function handleShowEditBoard() {
    setShowUpdateBoard(!showUpdateBoard);
  }

  return (
    <div>
      {board.name}
      <button onClick={handleDeleteBoard}> Delete Board </button>
      <button onClick={handleShowEditBoard}> Update Board </button>
      {showUpdateBoard ? (
        <UpdateBoardForm
          updateFormState={updateFormState}
          setUpdateFormState={setUpdateFormState}
          handleUpdateBoard={handleUpdateBoard}
        />
      ) : null}
    </div>
  );
}

export default Board;
