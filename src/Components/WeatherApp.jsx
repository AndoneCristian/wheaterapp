import React, { useState } from "react";
import axios from "axios";
import { WeatherKey } from "./WeatherKey";
import { AiOutlineSearch } from "react-icons/ai";
import WeatherCard from "./WeatherCard";

const WeatherApp = () => {
  const [input, setInput] = useState("Bucharest");
  const [info, setinfo] = useState();

  const getData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${WeatherKey}&units=metric`
      )
      .then((response) => {
        setinfo(response.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          alert("City not found! Try again!");
        }
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="box-border p-4 w-3/4 md:w-2/6 h-4/6  bg-gradient-to-br from-[#9064FD] to-[#643cc8] rounded-3xl flex flex-col items-center shadow-2xl">
      <form onSubmit={submitHandler} className="flex items-center gap-22">
        <input
          className="px-6 ml-4 py-4 bg-white/80 rounded-full outline-none text-center"
          type="text"
          value={input}
          placeholder="Type any city / country"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="bg-white/80 p-3 rounded-full">
          <AiOutlineSearch size={30} />
        </button>
        {console.log(info)}
      </form>

      <WeatherCard weather={info} />
    </div>
  );
};

export default WeatherApp;
