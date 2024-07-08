import TodoInfo from "./TodoInfo";
import classes from "./TodoList.module.css";

function TodoList({ list }) {
  return (
    <div>
      {list.length === 0 && (
        <p>The List of Todos is empty. Please add a new one.</p>
      )}
      {list.length > 0 && (
        <ul className={classes.list}>
          {list.map((todo, index) => (
            <TodoInfo key={index} {...todo} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
