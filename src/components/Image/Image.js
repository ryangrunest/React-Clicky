import React from "react";
import './Image.css';

function Image(props) {
  return (
      <img className="image" src={props.id} alt="game of thrones" onClick={() => props.clickEvent(props.id)}/>
  )
}

export default Image;