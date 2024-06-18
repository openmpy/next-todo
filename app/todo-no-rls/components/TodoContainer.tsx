"use client";

import { deleteTodosHard } from "@/apis/todos-no-rls";
import { useEffect } from "react";

const TodoContainer = () => {
  useEffect(() => {
    deleteTodosHard(1);
  }, []);

  return <div>TodoContainer</div>;
};

export default TodoContainer;
