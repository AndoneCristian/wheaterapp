import React from "react";
import WeatherApp from "./Components/WeatherApp";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="w-full h-screen  flex justify-center items-center bg-[#333]">
        <WeatherApp />
      </div>
    </>
  );
};
export default App;
