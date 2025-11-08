import React from "react";
import { Play } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { playSong } from "../features/musicSlice";
import { Pause } from "lucide-react";

const MusicListCard = ({ elem }) => {
  const { currentMusic, isPlaying } = useSelector((state) => state.music);
  const dispatch = useDispatch();
  return (
    <div className="w-full p-4 flex items-center justify-between border border-gray-200 rounded-xl cursor-pointer shadow-md">
      <div className="flex items-center gap-15">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img
            className="h-full w-full object-center"
            src="https://media.istockphoto.com/id/1083599488/vector/golden-musical-key.jpg?s=612x612&w=0&k=20&c=Z2AlE23JNSs1t7cWr-MTrDG-V-vvRzh9FBRoeZ_Ff2E="
            alt="song image"
          />
        </div>
        <div className="font-bold text-2xl">{elem.name}</div>
      </div>
      <div
        onClick={() => dispatch(playSong(elem))}
        className="cursor-pointer w-15 h-15 flex items-center justify-center bg-white shadow-md border border-gray-200 rounded-full"
      >
        {currentMusic?.id === elem.id && isPlaying ? <Pause /> : <Play />}
      </div>
    </div>
  );
};

export default MusicListCard;
