import { getTodoAction } from "@/actions/ping/todo/todo.action";
import { NextResponse } from "next/server";

export const GET = async () => {
  const result = await getTodoAction();

  console.log("todo GET API income", result);
  return NextResponse.json({ ...result });
};
