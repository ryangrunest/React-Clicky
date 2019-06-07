import React from "react";
import './Image.css';

class Image extends React.Component {
  state =  {
    isClicked: false
  }
  checkIfClicked = () => {
    console.log('clicked')
    if ( this.state.isClicked === false ) {
      this.setState({  isClicked: true })
    } else { alert('you lost :(') }
  }
  render() {
      return <img className="image" src={this.props.id} alt="game of thrones" onClick={this.checkIfClicked}/>
  }
}

export default Image;