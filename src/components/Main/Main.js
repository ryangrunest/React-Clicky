import React from "react";
import Image from "../Image/Image"
import './Main.css';

class Main extends React.Component {
  render() {
    return (
      <div className='main-content'>
        {this.props.data.map(item =>
          <Image id={item.id} clickEvent={this.props.cardClicked}/>
        )}
      </div>
    )
  }
}

export default Main;