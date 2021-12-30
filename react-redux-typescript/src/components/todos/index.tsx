import React, { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { addTodo, selectTodos } from "../../features/todosSlice";
import { useAppDispatch } from "../../hooks";
import { ITodo } from "../../features/todosSlice";

let TodoValue: ITodo;

const Todos: React.FC = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<typeof TodoValue.value>(""); //top

  const handleValue: React.ChangeEventHandler<HTMLInputElement> = (ev) => {
    setValue(ev.target.value);
  };

  const handleForm = (ev: FormEvent) => {
    ev.preventDefault();
    if (value) {
      dispatch(addTodo(value));
      setValue("");
    }
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" value={value} onChange={handleValue} />
      </form>

      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
