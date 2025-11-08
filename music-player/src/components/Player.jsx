import { Pause, Play } from "lucide-react";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playAndPause, playSong } from "../features/musicSlice";

const Player = () => {
  const dispatch = useDispatch();
  const audioRef = useRef(null);
  const { currentMusic, isPlaying } = useSelector((state) => state.music);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioRef.current && currentMusic) {
      audioRef.current.src = currentMusic.src;
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [currentMusic, isPlaying]);

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    return moment.utc(time * 1000).format("m:ss");
  };

  const handleTimeBar = (e) => {
    let newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleTimeDuration = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  if (!currentMusic) return null;

  return (
    <div className="w-[95%] fixed rounded-xl bottom-10 py-4 justify-between bg-orange-300 flex items-center px-10 border border-gray-200 shadow-md">
      <div className="flex items-center gap-15">
        <div>Animation</div>
        <div className="w-20 h-20 border border-gray-400 rounded-full overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/1083599488/vector/golden-musical-key.jpg?s=612x612&w=0&k=20&c=Z2AlE23JNSs1t7cWr-MTrDG-V-vvRzh9FBRoeZ_Ff2E="
            alt="url"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span>{formatTime(currentTime)}</span>
        <input onChange={handleTimeBar} value={currentTime} type="range" />
        <span>{formatTime(duration)}</span>
      </div>
      <div
        onClick={() => dispatch(playAndPause())}
        className="cursor-pointer w-20 h-20 flex items-center justify-center bg-white shadow-md border border-gray-200 rounded-full"
      >
        {isPlaying ? <Pause /> : <Play />}
      </div>

      <audio ref={audioRef} onTimeUpdate={handleTimeDuration} />
    </div>
  );
};

export default Player;
