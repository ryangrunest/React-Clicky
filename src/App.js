import React, { Component } from "react";
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  state = {
    pickedCards: [],
    totalGuessed: 0,
    highestCount: 0
  }
  loadCards = () => {
    const newState = { ...this.state };

    while ( newState.pickedCards.length < 11 )  {

    }
  }
  render() {
    return (
    <div>
      <Header />
      <Main />
    </div>
  )};
}

export default App;


let min=1; 
let max=12;  
let random = parseInt(Math.random() * (+max - +min) + +min);
console.log(random);