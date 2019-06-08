import React from "react";
import Image from "../Image/Image"
import './Main.css';

class Main extends React.Component {
  state = {
    cards: [
      { id:1, img: '/imgs/1.jpg', isClicked: false },
      { id: 2,img: '/imgs/2.jpg', isClicked: false },
      { id: 3,img:'/imgs/3.jpg', isClicked: false },
      { id: 4,img:'/imgs/4.png', isClicked: false },
      { id: 5,img:'/imgs/5.jpg', isClicked: false },
      { id: 6,img:'/imgs/6.jpg', isClicked: false },
      { id: 7,img:'/imgs/7.png', isClicked: false },
      { id: 8,img:'/imgs/8.jpg', isClicked: false },
      { id: 9,img:'/imgs/9.jpg', isClicked: false },
      { id:10 ,img:'/imgs/10.jpeg', isClicked: false },
      { id:11 ,img:'/imgs/11.jpg', isClicked: false },
      { id: 12,img:'/imgs/12.jpg', isClicked: false },
    ],
  }
  checkIfClicked = async (e) => {
    console.log(e.target.id);
const newArr = await this.state.cards.map(card => {
    if(e.target.id == card.id)  {
      return {
        id: card.id,
        img:card.img,
        isClicked: true
      }
    } else {
      return  card
    }
  
})
   this.setState({
     cards:newArr
   })
  };

  getImage = () => {
    return this.state.cards[Math.floor(Math.random() * this.state.cards.length)];
  };
  render() {
    return (
      <div className='main-content'>
        {this.state.cards.map(item =>
          <Image key={item.id} data={this.getImage()} clickEvent={this.checkIfClicked}/>
        )}
      </div>
    )
  }
}

export default Main;