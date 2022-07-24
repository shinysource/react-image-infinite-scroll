import React from "react";

const Image = ({ imageObject }) => {
  return (
    <div className="image">
      <img src={imageObject.urls.regular} alt={imageObject.alt_description} />
    </div>
  );
};

export default Image;
