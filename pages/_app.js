import { useState } from "react";
import "../styles/globals.css";
import { images } from "../constants/images";

function MyApp() {
  const [imageType, setImageType] = useState(0);

  return (
    <div className="overflow-x-hidden">
      <div className="w-full grid grid-cols-4 grid-rows-1 h-[70px] bg-slate-200/70 justify-around">
        <button
          onClick={() => {
            setImageType(1);
          }}
          className={
            imageType == 1
              ? "bg-amber-400 bg-opacity-70 font-semibold"
              : "hover:bg-amber-200/60"
          }
        >
          Birds
        </button>
        <button
          onClick={() => {
            setImageType(2);
          }}
          className={
            imageType == 2
              ? "bg-orange-400 bg-opacity-70 font-semibold"
              : "hover:bg-orange-200/60"
          }
        >
          Beaches
        </button>
        <button
          onClick={() => {
            setImageType(3);
          }}
          className={
            imageType == 3
              ? "bg-emerald-400 bg-opacity-70 font-semibold"
              : "hover:bg-emerald-200/60"
          }
        >
          Mountains
        </button>
        <button
          onClick={() => {
            setImageType(4);
          }}
          className={
            imageType == 4
              ? "bg-indigo-400 bg-opacity-70 font-semibold"
              : "hover:bg-indigo-200/60"
          }
        >
          Food
        </button>
      </div>
      <div className="w-screen grid grid-cols-5 grid-rows-10">
        {images[imageType].map((item) => (
          <img
            src={item}
            alt="photos"
            className="w-full h-[200px] object-cover overflow-hidden"
          />
        ))}
      </div>
    </div>
  );
}

export default MyApp;
