import React, {useState} from "react";
import "./TodoItem.css";

function Todo(props) {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
  setChecked(!checked);
  document.getElementsByTagName('p')[0].style.textDecoration = "line-through";
  }

  const { content, id } = props;

  return (
    <div className={`todo-item ${checked ? 'completed' : ''}`} onClick = {handleClick}>
      <p>
        {content} 
      </p>
      <button className="delete-button" onClick = { () => props.delete(id)}>Delete</button>
    </div>
  );
}

export default Todo;
