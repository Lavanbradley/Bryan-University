

function Picture (props){

  return(
    <div>
      <img src= {props.src} alt = " "  />
      {props.children}
    </div>
  )
}
export default Picture;