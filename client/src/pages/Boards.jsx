import { useEffect, useState } from "react";
import BoardCell from "../components/BoardCell";

function Boards() {
  const [boards, setBoards] = useState([]);

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
  }, []);

  const boardCells = boards.map((board) => (
    <BoardCell key={board.name + board.id} name={board.name} id={board.id} />
  ));

  return <div>{boardCells}</div>;
}

export default Boards;
