import { useState, useEffect } from "react";
const TodoItem = ({ item }) => {
  const [checked, setChecked] = useState(item.done);// establece la variable para el check(marcar casillas)

  useEffect(() => {
    if (localStorage.getItem(item.id) !== null)
      setChecked(JSON.parse(localStorage.getItem(item.id)));
  }, []);

  useEffect(() => {
    localStorage.setItem(item.id, JSON.stringify(checked));
  }, [checked]);

  return (
    <>
      <div className="todo-item">
        <div className="todo-item-title">{item.title}</div>
        <div className="todo-item-done">
          <input
            type="checkbox"
            checked={checked}//<- con false desmarca todas las casillas, con true las marca
            onChange={(e) => { //<- esto es para cuando uno clickea con el enter, sin la necesidad de mouse
              setChecked(!checked);
            }}
          />
        </div>
      </div>
    </>
  );
};
export default TodoItem;
