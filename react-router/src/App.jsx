import React from "react";
import AppRouter from "./router/AppRouter";
import Navigation from "./router/Navigation";

const App = () => {
  return (
    <div className="h-screen w-full">
      <Navigation />
      <AppRouter />
    </div>
  );
};

export default App;
