import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
    <div className="card" onClick={() => props.clickImage(props.id)}>
      <div className="img-container">
        <img src={props.image} />
      </div>
    </div>
  );
}

export default ImageCard;
