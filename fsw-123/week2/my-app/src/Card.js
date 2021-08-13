import './App.css';

function Card(props) {
  return (
    <div style = {props.style}>
     <h1>{props.title}</h1>
     <h2>{props.subTitle}</h2>
   
  
     <h3>{props.description}</h3>
     
     {props.children}
    </div>
  )
}

export default Card;