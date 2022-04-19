import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import UpdateBoardForm from "../components/UpdateBoardForm";
import List from "../components/List";
//Needs logic so it's created by a member
//Needs list logic finished as well
//Needs
function Board() {
  let navigate = useNavigate();
  let { id } = useParams(); //id of board

  const [board, setBoard] = useState([]);
  const [lists, setLists] = useState([]);
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
      },
    })
      .then((r) => r.json())
      .then((board) => {
        setBoard(board);
        setLists(board.lists);
      });
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

  const listItems = lists?.map((list) => (
    <List
      key={list.name + list.id}
      list={list}
      lists={lists}
      setLists={setLists}
    />
  ));

  return (
    <div>
      <h1 className="text-xl">{board.name}</h1>
      <br />
      <br />
      <div className="grid grid-cols-1">{listItems}</div>
      <br />
      <button className="rounded-full bg-green-200 m-2 p-1"> Add List </button>
      <br />
      <button
        onClick={handleDeleteBoard}
        className="rounded-full bg-red-200 m-2 p-1"
      >
        {" "}
        Delete Board{" "}
      </button>
      <br />
      <button
        onClick={handleShowEditBoard}
        className="rounded-full bg-yellow-200 m-2 p-1"
      >
        {" "}
        Update Board{" "}
      </button>
      <br />
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
