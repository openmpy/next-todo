"use client";

import useTodosController from "../hooks/useTodosController";

const TodoContainer = () => {
  const { loading, todos } = useTodosController();

  console.log(loading);
  console.log(todos);

  return <div>TodoContainer</div>;
};

export default TodoContainer;
