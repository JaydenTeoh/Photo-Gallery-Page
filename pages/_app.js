import { useState } from "react";
import "../styles/globals.css";
import { images } from "../constants/images";
import PhotoGallery from "../components/PhotoGallery";

function MyApp() {
  const [imageType, setImageType] = useState("empty");

  return (
    <div className="overflow-x-hidden">
      <PhotoGallery imageType={imageType} setImageType={setImageType} />
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
