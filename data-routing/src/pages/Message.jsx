import React from "react";
import { useParams } from "react-router";

const Message = () => {
  let { firstname, lastname } = useParams();

  return (
    <div className="flex h-[90%] w-full gap-10 flex-col justify-between">
      <nav className="border-b border-gray-400 p-4">
        {`${firstname} ${lastname}`}
      </nav>
      <div>messages here</div>
      <div>
        <input type="text" placeholder="type..." />
        <button>send</button>
      </div>
    </div>
  );
};

export default Message;
