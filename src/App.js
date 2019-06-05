import React, { Component } from "react";
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

class App extends Component {
  state = {
    cards: [
      { id: '/imgs/1.jpg' },
      { id: '/imgs/2.jpg' },
      { id: '/imgs/3.jpg' },
      { id: '/imgs/4.png' },
      { id: '/imgs/5.jpg' },
      { id: '/imgs/6.jpg' },
      { id: '/imgs/7.png' },
      { id: '/imgs/8.jpg' },
      { id: '/imgs/9.jpg' },
      { id: '/imgs/10.jpeg' },
      { id: '/imgs/11.jpg' },
      { id: '/imgs/12.jpg' },
    ],
    pickedCards: {},
    totalGuessed: 0,
    highestCount: 0
  }
  loadCards = () => {
    const newState = { ...this.state };
  }
  checkCard = (id) => {
    console.log('clicked'+ id);
    this.setState({
      pickedCards: {
        ...this.state.pickedCards,
        [id]:  (this.state.pickedCards[id] || 0) + 1,
      }
    });
  }
  render() {
    console.log(this.state.pickedCards);
    return (
    <div>
      <Header />
      <Main data={this.state.cards} cardClicked={this.checkCard}/>
    </div>
  )};
}

export default App;


