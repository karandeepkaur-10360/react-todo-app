import React, { useState } from "react";

function List({ addItem, list, deleteTask, toggleTask }) {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addItem(taskText);

    setTaskText("");
  };

  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter task"
        />

        <button className="add" type="submit">Add Task</button>
      </form>
      <div className="task-list">
        {list.map((item) => (
          <div className="task" key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleTask(item.id)}
            />
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.text}
            </span>
            <button className="delete" onClick={() => deleteTask(item.id)}>
              Delete
            </button>
          </div>
        ))}{" "}
      </div>{" "}
    </>
  );
}

export default List;
