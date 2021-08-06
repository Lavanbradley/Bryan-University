function Card(props) {
  return (
    <div style = {props.style}>
     <h1>{props.title}</h1>
     <h1>{props.subTitle}</h1>
     <h1>{props.description}</h1>
     {props.children}
    </div>
  )
}

export default Card;