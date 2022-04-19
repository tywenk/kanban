import React from "react";
import { useState } from "react";
import TaskEdit from "./TaskEdit";

function Task({ tasks, setTasks, task }) {
  const [showEditTask, setShowEditTask] = useState(false);

  function handleShowEditTask() {
    setShowEditTask(!showEditTask);
  }

  return (
    <div>
      {task.title}&nbsp;
      <button
        onClick={handleShowEditTask}
        className="rounded-full bg-yellow-200 m-2 p-1"
      >
        {" "}
        Update Task{" "}
      </button>
      {showEditTask ? (
        <TaskEdit task={task} tasks={tasks} setTasks={setTasks} />
      ) : null}
    </div>
  );
}

export default Task;
