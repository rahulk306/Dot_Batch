import "./App.css";
import { useState } from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {

  return (
    <div className = "w-full h-screen flex flex-col background relative overflow-x-hidden items-center"> 
      <h1 className = "bg-white rounded-lg w-11/12 text-center ml-[25px] mt-[40px] mr-[25px] text-3xl font-bold">RANDOM GIFS</h1>
      <div className = "flex flex-col w-full items-center mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>  
  );
}

export default App;
