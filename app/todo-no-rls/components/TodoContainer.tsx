"use client";

import TodoList from "@/components/ui/TodoList";

const TodoContainer = () => {
  return (
    <div>
      <TodoList sharedUserFullName="test user" ownerUserId="123123" />
    </div>
  );
};

export default TodoContainer;
