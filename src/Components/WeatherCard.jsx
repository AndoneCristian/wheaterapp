import React from "react";
import { WiHumidity } from "react-icons/wi";
import { BsWind } from "react-icons/bs";

const WeatherCard = (weather) => {
  const icon = weather?.weather?.weather[0]?.icon;

  return (
    <div className="flex w-full flex-col gap-6 items-center text-white">
      <div className="w-44 h-24  my-2 rounded-full">
        {console.log(weather?.weather?.weather[0]?.icon)}
        <img
          className="bg-cover w-full "
          src={`https://openweathermap.org/img/wn/${icon ? icon : "01d"}.png`}
          alt={"weather icon"}
        />
      </div>
      <div className="w-full text-6xl flex justify-center font-bold ">
        {Math.floor(weather?.weather?.main?.temp)}°C
      </div>
      <div className="w-full  text-4xl flex justify-center">
        {weather?.weather?.name}
      </div>
      <div className="w-full flex justify-center  gap-8  ">
        <div className="text-md md:text-2xl flex flex-col items-center justify-center">
          <span className="flex  justify-center ">
            <WiHumidity size={20} />
          </span>
          {weather?.weather?.main?.humidity}

          <span className=""> Humidity</span>
        </div>
        <div className="text-md md:text-2xl flex flex-col items-center justify-center">
          <span className="flex justify-center ">
            <BsWind size={20} />
          </span>
          {weather?.weather?.wind?.speed}
          <span className="mx-2"> km/h</span>
        </div>
      </div>
    </div>
  );
};
export default WeatherCard;
