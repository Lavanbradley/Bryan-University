import React from 'react';
import './App.css';
import Die from './Dice'



class Dice extends React.Component {
  constructor() {
    super()
    this.state = {
      die0: 0,
      die1: 0
    }
    this.diceRoll = this.diceRoll.bind(this)
  }


  diceRoll() {
    console.log('rolled');
    let d0 = [this.state.die0]
    let d1 = [this.state.die1]
    d0 = Math.floor(Math.random() * 6)
    d1 = Math.floor(Math.random() * 6)
    console.log(d0);
    console.log(d1);
    this.setState(prevState => {
      return {

        die0: d0,
        die1: d1
      }

    })
  }
  render() {
    return (
      <div>

        <Die pips={this.state.die0} id='0' />
        <Die pips={this.state.die1} id='1' />
        <div>
          <button onClick={this.diceRoll}>Roll Dice</button>
        </div>
      </div>
    )
  }





}









export default Dice;
