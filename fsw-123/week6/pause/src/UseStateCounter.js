import { useState } from "react";

export default function UseStateCounter (){

  //useState API - state, state setter
  const [number, setNumber] = useState(0);
  const increment = ()=> setNumber(number + 1);

  return(
    <>
    <h3 onClick={() => increment(1)}>{number}</h3>
    </>
  )
}