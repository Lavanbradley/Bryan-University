import React from 'react';
import './App.css';
import Die from './Dice'



class Dice extends React.Component {
  constructor() {
    super()
    this.state = {
      die297: 0,
      die298: 0
    }
    this.diceRoll = this.diceRoll.bind(this)
  }


  diceRoll() {
    console.log('rolled');
    let d297 = [this.state.die297]
    let d298 = [this.state.die298]
    d297 = Math.floor(Math.random() * 6)
    d298  = Math.floor(Math.random() * 6)
    console.log(d297);
    console.log(d298 );
    this.setState(prevState => {
      return {

        die297: d297,
        die298: d298 
      }

    })
  }
  render() {
    return (
      <div>

        <Die pips={this.state.die297}  />
        <Die pips={this.state.die298}  />
        <div>
          <button onClick={this.diceRoll}>Roll Dice</button>
          <p>You rolled: {this.state.die297 + this.state.die298}! </p>
        </div>
      </div>
    )
  }





}









export default Dice;
