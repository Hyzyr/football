import React from "react";

const Img = (props) => {
  const icoSrc = props.src.startsWith("http")
    ? props.src
    : global.assetsFolder + props.src;
  return <img {...props} alt={props.alt ?? " "} src={icoSrc} />;
};

export default Img;
