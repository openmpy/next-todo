"use client";

import { getTodosBySearch } from "@/apis/todos-no-rls";
import { useEffect } from "react";

const TodoContainer = () => {
  useEffect(() => {
    getTodosBySearch("스프링");
  }, []);

  return <div>TodoContainer</div>;
};

export default TodoContainer;
