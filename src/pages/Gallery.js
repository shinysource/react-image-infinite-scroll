import React, { useState, useEffect, useCallback } from "react";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import FirstLoading from "../components/loading/FirstLoading.js";
import api from "../services/api-service.js";

const Gallery = () => {
  const [imageObjects, setImageObjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const [error, setError] = useState(null);

  const fetchImages = useCallback(() => {
    setIsLoading(true);
    api(pageNumber)
      .then((response) => {
        setImageObjects((imageObjects) => [...imageObjects, ...response.data]);
        setIsFirstLoading(false);
        setIsLoading(false);
      })
      .catch((e) => {
        <ErrorMessage />;
        setError(e);
      });
  }, [pageNumber]);

  const handleScroll = React.useCallback(() => {
    if (
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.offsetHeight
    ) {
      setPageNumber(pageNumber + 1);
    }
  }, [pageNumber]);

  useEffect(() => {
    fetchImages();
    window.addEventListener("scroll", handleScroll);
  }, [fetchImages, handleScroll]);

  return (
    <div className="flex">
      <>
        {error ? (
          alert(error)
        ) : (
          <>
            {isFirstLoading ? (
              <FirstLoading />
            ) : (
              <>
                {imageObjects.length ? (
                  <ImageGrid imageObjects={imageObjects} />
                ) : null}
              </>
            )}
            {isLoading && <div className="">Loading New Images ...</div>}
          </>
        )}
      </>
    </div>
  );
};

const ErrorMessage = () => {
  <div>
    <div className="">API Error</div>
    <div className>
      Looks like there's an error fetching images from the Unsplash API. This is
      likely due to exceeding their free API limit. <br />
      Please{" "}
      <a href={"https://github.com/rajrajhans/react-infinite-scroll-demo"}>
        clone the repo
      </a>{" "}
      and try locally using your own API keys or come back in 60 minutes.
    </div>
  </div>;
};

export default Gallery;
