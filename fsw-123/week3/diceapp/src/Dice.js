import React from 'react'

class Die extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let imgSrc = './images/die' + this.props.pips + '.jpg'
    let imgID = 'img' + this.props.id
   return(
     <img id = {imgID} src = {imgSrc} alt = 'dice'/>
   )
  }
}

export default Die;