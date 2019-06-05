import React from "react";
import Image from "../Image/Image"
import './Main.css';

function Main(props) {
  return (
    <div className='main-content'>
      {props.data.map(item =>
        <Image id={item.id} clickEvent={props.cardClicked}/>
      )}
    </div>
  )
}

export default Main;