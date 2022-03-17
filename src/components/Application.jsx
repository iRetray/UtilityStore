import React from "react";

export const Application = ({ name, url, icon }) => {
  const goToLink = () => {
    window.open(url);
  };

  return (
    <div className="applicationContainer" onClick={goToLink}>
      <img className="iconApp" src={icon} alt="" />
      <p>{name}</p>
    </div>
  );
};
