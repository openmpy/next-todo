"use client";

import { getTodoAction } from "@/actions/ping/todo/todo.action";

const ClientComponentTest = () => {
  const handleClick = async () => {
    const result = await getTodoAction();
    console.log("handleClick result", result);
  };

  return (
    <div>
      <button onClick={handleClick}>Test server actions</button>
    </div>
  );
};

export default ClientComponentTest;
