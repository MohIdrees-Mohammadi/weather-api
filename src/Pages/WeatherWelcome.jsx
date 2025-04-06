import React from "react";
import umb from "../assets/umbrella.png";
import { useNavigate } from "react-router-dom";

const WeatherWelcome = () => {
  const navigate = useNavigate()
  return (
    // main div 
    <div className="bg-primary h-[100vh] flex justify-center items-center">
       {/* Left  */}
      <div className="flex items-center justify-center">
        <div className="bg-seconday h-[90vh] w-[80%] rounded-3xl flex items-center justify-center">
          <img className="w-[50rem]" src={umb} alt="" />
        </div>
      </div>

      {/* Right  */}
      <div className="w-[35%]">
        <div className="flex flex-col items-center justify-center gap-4 h-[90vh] ">
        <img className="w-25" src={umb} alt="" />
        <h1 className="text-6xl font-bold text-white">Breeze</h1>
        <h3 className="text-2xl text-gray-400">Weather App</h3>
        <button className="bg-bright-blue p-4 rounded-4xl w-[10rem] text-white mt-[1rem]"
         onClick={()=> navigate("/current-city")}
        >Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default WeatherWelcome;
