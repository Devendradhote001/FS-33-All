import React from "react";

const About = () => {
  console.log("about rendering...");
  return (
    <div>
      <h1>This is about</h1>
    </div>
  );
};

export default React.memo(About);
