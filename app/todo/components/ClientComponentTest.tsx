"use client";

import { pingAction } from "@/actions/ping/ping.action";

const ClientComponentTest = () => {
  const handleClick = async () => {
    const result = await pingAction();
    console.log("result", result); 
  };

  return (
    <div>
      <button onClick={handleClick}>Test server actions</button>
    </div>
  );
};

export default ClientComponentTest;
