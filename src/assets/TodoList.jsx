import React from "react";
import  "../index.css";

export default function TodoList(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }

  function handleDone() {
    props.onDone(props.id);
  }

  const style = props.done ? { color: "red" , textDecoration:"line-through" } : {};

  return (
    <div>
      <li style={style}>{props.text}</li>
      <div className="button-wrapper">
        <button className="buttons cancel" type="button" onClick={handleDelete}>
          ✘
        </button>
        <button className="buttons done" type="button" onClick={handleDone}>
          ✔
        </button>
      </div>
    </div>
  );
}
