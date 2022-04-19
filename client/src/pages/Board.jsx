import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import UpdateBoardForm from "../components/UpdateBoardForm";
import List from "../components/List";
//Needs logic so it's created by a member
//Needs list logic finished as well
//Needs
function Board() {
  let navigate = useNavigate();
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
      
  }, []);

  // const users = board.users.map((user) => (
  //   user.username
  // ))

  function handleDeleteBoard() {
    fetch(`http://localhost:3000/boards/${id}`, {
      method: "DELETE",
    }).then(navigate("/boards"));
  }

  function handleUpdateBoard() {
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

  const lists = board.lists?.map((list) => (
    <List key={list.name + list.id }list={list}/>
  ))

  return (
    <div>
      {board.name}<br />
      <br/>
      {lists}
      <br/>
      <button> Add List </button>
      <br/>
      <button onClick={handleDeleteBoard}> Delete Board </button><br/>
      <button onClick={handleShowEditBoard}> Update Board </button><br/>
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
