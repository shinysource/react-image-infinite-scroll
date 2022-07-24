import React from "react";

const Image = ({ imageObject }) => {
  return (
    <div className="image">
      <img src={imageObject.url.regular} alt={imageObject.alt_description} />
    </div>
  );
};

export default Image;
