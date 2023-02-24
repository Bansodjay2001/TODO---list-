import { useState } from 'react';
import TodoList from './assets/TodoList';


export default function App() {

  const [inputText ,setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleClick(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItems() {
    setItems(prevItems => [...prevItems, { text: inputText, done: false }]);
    setInputText("");  
  }

  function deleteItem(id) {
    setItems(prevItems => prevItems.filter((item, index) => index !== id));
  }

  function markDone(id) {
    setItems(prevItems => {
      return prevItems.map((item, index) => {
        if (index === id) {
          return { ...item, done: !item.done };
        }
        return item;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleClick} value={inputText}/>
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ol>
          {items.map((todoItem, index) => (
            <TodoList
              key={index}
              id={index}
              text={todoItem.text}
              done={todoItem.done}
              onDelete={deleteItem}
              onDone={markDone}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}
