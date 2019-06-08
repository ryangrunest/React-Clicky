import React, { Component } from "react";
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

class App extends Component {
  state = {
    pickedCards: {},
    totalGuessed: 0,
    highestCount: 0
  }
  // checkCard = (id) => {
  //   this.setState({
  //     pickedCards: {
  //       ...this.state.pickedCards,
  //       [id]:  (this.state.pickedCards[id] || 0) + 1,
  //     },
  //     totalGuessed: this.state.totalGuessed + 1
  //   });
  //   // this.setState({ totalGuessed: this.totalGuessed + 1 })
  // };
  render() {
    console.log(this.state.pickedCards);
    console.log(this.state.totalGuessed);
    return (
    <div>
      <Header />
      <Main/>
    </div>
  )};
}

export default App;


