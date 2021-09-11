import { useReducer } from "react";

export default function ReducerToggle(){
  const reducer = (checked) => !checked;

  //state, updater function, and reducer (produces new state)

  const [checked, toggle] = useReducer(reducer, false)

  return(
    <>
    <section>
      <input
      type='checkbox'
      value={checked}
      onChange={toggle}
      />
    </section>
    <p>{checked? "checked" : "not checked"}</p>
    </>
  )
}