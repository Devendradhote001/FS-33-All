import { Play } from "lucide-react";
import React from "react";

const Player = () => {
  return (
    <div className="w-[95%] absolute bottom-10 py-4 justify-between bg-orange-300 flex items-center px-10 border border-gray-200 shadow-md">
      <div className="flex items-center gap-15">
        <div>Animation</div>
        <div className="w-20 h-20 border border-gray-400 rounded-full overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/1083599488/vector/golden-musical-key.jpg?s=612x612&w=0&k=20&c=Z2AlE23JNSs1t7cWr-MTrDG-V-vvRzh9FBRoeZ_Ff2E="
            alt="url"
          />
        </div>
      </div>
      <div className="cursor-pointer w-20 h-20 flex items-center justify-center bg-white shadow-md border border-gray-200 rounded-full">
        <Play size={30} />
      </div>
    </div>
  );
};

export default Player;
