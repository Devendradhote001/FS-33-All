import React from "react";
import MusicListCard from "../components/MusicListCard";
import Player from "../components/Player";

const HomeScreen = () => {
  let musicsArr = [
    { id: 1, name: "Channa-Mereya", src: "/musics/channa-mereya.mp3" },
    { id: 2, name: "Ankhiya-Gulaab", src: "/musics/ankhiya-gulaab.mp3" },
    { id: 3, name: "Dekha-Tenu", src: "/musics/dekha-tenu.mp3" },
    { id: 4, name: "Ishq-Na-Kare", src: "/musics/ishq-na-kare.mp3" },
    { id: 5, name: "Jana-Samjho", src: "/musics/jana-samjho.mp3" },
    { id: 6, name: "Teri-Mahima", src: "/musics/teri-mahima.mp3" },
  ];

  return (
    <div className="h-screen w-full p-10">
      <div className="flex relative flex-col gap-5">
        {musicsArr.map((elem) => {
          return <MusicListCard key={elem.id} elem={elem} />;
        })}
      </div>
      <Player />
    </div>
  );
};

export default HomeScreen;
