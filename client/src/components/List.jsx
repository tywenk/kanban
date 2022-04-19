import React from "react";
import Task from "./Task";
import { useEffect, useState } from "react";

// Lists still need update logic
// Lists still need to be reorderable
// Lists still need tasks to display
function List({ lists, setLists, list }) {
  const [tasks, setTasks] = useState([]);
  const [isAddTask, setIsAddTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  useEffect(() => {
    setTasks(list?.tasks);
  }, []);

  function handleDeleteList() {
    fetch(`http://localhost:3000/lists/${list.id}`, {
      method: "DELETE",
    }).then(() => {
      let withoutDeletedList = lists.filter((l) => l.id !== list.id);
      setLists(withoutDeletedList);
    });
  }

  function handleAddTask(task) {
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((r) => r.json())
      .then((task) => setTasks([...tasks, task]));
  }

  function onNewTask() {
    let task = {
      title: newTaskTitle,
      list_id: list.id,
      user_id: 1,
      member_id: 1,
    };
    handleAddTask(task);
    setIsAddTask((isAddTask) => !isAddTask);
  }

  const taskListed = tasks?.map((task) => (
    <Task
      task={task}
      tasks={tasks}
      setTasks={setTasks}
      key={task.id + task.title}
    />
  ));

  return (
    <div className="border border-solid">
      <div className="bg-slate-200">
        <h1>{list.name}</h1>
        {taskListed}
        {isAddTask ? (
          <form onSubmit={onNewTask}>
            <input
              type="text"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
            ></input>
            <button type="submit"></button>
          </form>
        ) : (
          <div></div>
        )}
      </div>
      <button
        className="rounded-full bg-green-200 m-2 p-1"
        onClick={() => setIsAddTask((isAddTask) => !isAddTask)}
      >
        {isAddTask ? "Cancel" : "Add Task"}
      </button>
      &nbsp;
      <button
        className="rounded-full bg-red-200 m-2 p-1"
        onClick={handleDeleteList}
      >
        Delete List
      </button>
      &nbsp;
      <button className="rounded-full bg-yellow-200 m-2 p-1">
        Update List
      </button>
    </div>
  );
}

export default List;
