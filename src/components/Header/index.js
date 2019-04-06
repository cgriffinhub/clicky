import React from "react";
import "./style.css";

function Header(props) {
  return <div className="jumbotron">
  <h1 className="text-center">Clicky Game</h1>
  <h2 className="text-center">Score: <span>{props.children}</span></h2>
  <div className="text-left"><h4>Instructions: Click each image one time to win. Once you click an image for the second time, the game ends. </h4></div>
  
  </div>;
}

export default Header;
