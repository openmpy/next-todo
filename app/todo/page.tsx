import { sleep } from "@/lib/utils";

const page = async () => {
  console.log(">>> SSR Start");
  await sleep(1500);
  console.log(">>> SSR End");
  return <div>page</div>;
};

export default page;
