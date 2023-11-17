import React from "react";
import "./ShadowBox.scss";

function ShadowBox(props) {
  return <div className="shadow-box">{props.children}</div>;
}

export default ShadowBox;
