import React from "react";
import './Image.css';

class Image extends React.Component {
  state =  {
    isClicked: false
  }

  checkIfClicked = () => {
    if (this.state.isClicked === false) {
      alert('clicked');
      this.setState({
        isClicked: true,
      })
    }
    
  }
  // () => this.props.clickEvent(this.props.id)
  render() {
    console.log(this.state.isClicked)
      return <img className="image" src={this.props.id} alt="game of thrones" onClick={this.checkIfClicked}/>
  }
}

export default Image;