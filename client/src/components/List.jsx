import React from 'react'
import Task from './Task'
import { useEffect, useState } from 'react'


// Lists still need update logic
// Lists still need to be reorderable
// Lists still need tasks to display
function List({ list }) {
    
    function handleDeleteList() {
        fetch(`http://localhost:3000/lists/${list.id}`, {
            method: "DELETE",
        })
    }

    const tasks = list.tasks?.map((task) => (
      <Task task={task} key={task.id + task.title}/>
    ))

  return (
    <div>
        {list.name}&nbsp;{tasks}
        
        <button onClick={handleDeleteList}> Delete List </button>
        &nbsp;
        <button> Update List </button>
    </div>
  )
}

export default List