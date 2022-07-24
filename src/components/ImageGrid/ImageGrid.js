import React from "react";
import Image from "./Image/Image.js";

const ImageGrid = (imageObjects) => {
  return (
    <div className="image-grid">
      {imageObjects.map((imageObject) => {
        <Image key={imageObject.id} imageObject={imageObject} />;
      })}
    </div>
  );
};

export default ImageGrid;
