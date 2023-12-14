import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const completed = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );
  const uncompleted = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === false)
  );
  return (
    <section className="total-complete-items">
      <p>Tanlangan: {completed.length}</p>
      <p>Tanlanmagan: {uncompleted.length}</p>
    </section>
  );
};

export default TotalCompleteItems;
