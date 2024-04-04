import { useState } from "react";
import "./App.css";
import Board from "./board";

import one from './images/face1.png';
import two from './images/face2.png';
import three from './images/face3.png';
import four from './images/face4.png';
import five from './images/face5.png';
import six from './images/face6.png';


function App() {
  const dice = [one,two,three,four,five,six];
  function toggle() {
    const value= Math.floor(Math.random()*(6)) + 1;
    console.log("value: ",value);
    setValue(value);
  }
  const [player , setPlayer] = useState(0);
  const [value , setValue] = useState(6);
  const [coin , setCoin] = useState({red : 1 , blue : 91 , green : 1 , black : 1});


  function clickHandler(){
    toggle();
    setPlayer(prev => (prev+1)%4);
  }

  return (
    <div className="flex justify-center pt-10 gap-x-20 bg-yellow-100	 h-[100vh] w-[100vw]">

      <div className="bg-indigo-500 h-[200px] w-[200px] flex flex-col justify-center items-center gap-y-6 rounded-md">
        <h2 className="text-xl font-semibold">Players turn : {player+1}</h2>
        <div onClick={clickHandler} className="h-[100px] w-[100px]">
        {
          value && <img src={dice[value-1]} className="rounded-lg"></img>
        }
        </div>
      </div>
        
        <Board coin={coin} />
    </div>
  );
}

export default App;
