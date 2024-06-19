import { getTodoAction } from "@/actions/ping/todo/todo.action";
import ClientComponentTest from "./components/ClientComponentTest";

const page = async () => {
  console.log(">>> SSR Start");

  const result = await getTodoAction();
  // await sleep(1500);
  console.log(">>> SSR End");

  return (
    <div>
      todo page {JSON.stringify(result)}
      <ClientComponentTest />
    </div>
  );
};

export default page;
