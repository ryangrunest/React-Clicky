import React from "react";
import './Image.css';

class Image extends React.Component {
  
  render() {
    console.log(this.props)
    return <img className="image" src={this.props.data.img} id={this.props.data.id} alt="game of thrones" onClick={this.props.clickEvent}/>
  }
}

export default Image;