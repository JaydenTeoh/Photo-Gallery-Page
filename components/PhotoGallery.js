import { useState } from "react";

export default function PhotoGallery(props) {
  return (
    <div className="w-full grid grid-cols-4 grid-rows-1 h-[70px] bg-slate-200/70 justify-around">
      <button
        onClick={() => {
          props.setImageType("birds");
        }}
        className={
          props.imageType == "birds"
            ? "bg-amber-400 bg-opacity-70 font-semibold"
            : "hover:bg-amber-200/60"
        }
      >
        Birds
      </button>
      <button
        onClick={() => {
          props.setImageType("beaches");
        }}
        className={
          props.imageType == "beaches"
            ? "bg-orange-400 bg-opacity-70 font-semibold"
            : "hover:bg-orange-200/60"
        }
      >
        Beaches
      </button>
      <button
        onClick={() => {
          props.setImageType("mountains");
        }}
        className={
          props.imageType == "mountains"
            ? "bg-emerald-400 bg-opacity-70 font-semibold"
            : "hover:bg-emerald-200/60"
        }
      >
        Mountains
      </button>
      <button
        onClick={() => {
          props.setImageType("food");
        }}
        className={
          props.imageType == "food"
            ? "bg-indigo-400 bg-opacity-70 font-semibold"
            : "hover:bg-indigo-200/60"
        }
      >
        Food
      </button>
    </div>
  );
}
