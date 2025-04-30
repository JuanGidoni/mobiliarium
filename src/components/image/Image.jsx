import React, { useState } from "react";

const Image = ({ url, alt = "Image", className = "" }) => {
  const [isError, setIsError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => setIsError(true);
  const handleLoad = () => setIsLoaded(true);

  if (!url || isError) {
    return (
      <div className={`image-fallback ${className}`}>Image unavailable</div>
    );
  }

  return (
    <>
      {!isLoaded && (
        <div className={`image-fallback ${className}`}>Loading image...</div>
      )}
      <img
        src={url}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        className={className}
        style={{ display: isLoaded ? "block" : "none" }}
      />
    </>
  );
};

export default Image;
