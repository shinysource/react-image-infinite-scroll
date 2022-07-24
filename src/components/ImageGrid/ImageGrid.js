import React from "react";
import Image from "../Image/Image";

const ImageGrid = ({ imageObjects }) => {
  return (
    <div className="image-grid">
      {imageObjects.map((imageObject, index) => (
        <Image key={index} imageObject={imageObject} />
      ))}
    </div>
  );
};

export default ImageGrid;
