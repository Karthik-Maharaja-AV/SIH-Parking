import React, { useState } from "react";
import { GrRefresh } from "react-icons/gr";
import {Link} from "react-router-dom";
import "../Pages/book.css";

export default function Book() {
  const [num, setNum] = useState(0);
  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNum(randomNumberInRange(1, 8));
  };

  const [appState, changeState] = useState({
    activeObject: null,
    objects: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      //   { id: 9 },
      //   { id: 10 },
      //   { id: 11 },
      //   { id: 12 },
    ],
  });

  function toggleActive(index) {
    changeState({ ...appState, activeObject: appState.objects[index] });
  }

  function toggleActiveStyles(index) {
    if (appState.objects[index] === appState.activeObject) {
      return "box active";
    } else {
      return "box inactive";
    }
  }

  return (
    <div className="slot flex bg-gradient-to-r from-cyan-500 to-blue-500 items-center justify-center flex-col gap-10 h-screen">
      <h1 className="text-4xl flex gap-10 font-bold text-center">
        Slots Available : <span className="text-blue-500">{num}</span>{" "}     
        <button
          className="btn bg-blue-400 border-none text-white hover:bg-blue-800 hover:shadow hover:shadow-xl hover:shadow-orange-400 font-bold"
          onClick={handleClick}
        >
          Refresh <GrRefresh />
        </button>
      </h1>

      <h1 className="text-4xl font-bold text-center">Select a slot</h1>
      <div className="grid grid-cols-4">
        {appState.objects.map((elements, index) => (
          <div
            key={index}
            className={toggleActiveStyles(index)}
            onClick={() => {
              toggleActive(index);
            }}
          ></div>
        ))}
      </div>
      <Link to="/payment">
      <button className="btn border-none rounded bg-blue-400 hover:bg-blue-800 hover:shadow hover:shadow-xl hover:shadow-orange-400 text-white font-bold  ">
        Book the Slot
      </button>
      </Link>
    </div>
  );
}
