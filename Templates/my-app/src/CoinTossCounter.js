import { useState } from 'react';


function CoinTossCounter(){
  const [results, setResults] = useState([])

  const [counts, setCounts] = useState({H: 0, T: 0});

  const handleClick = (value) => {
   setResults([...results, value])
   setCounts({
...counts, [value]: counts[value] + 1

   })
  }
  
  const lis = results.map((result, index)=>(
    <li key = {`toss-${index}`}>{result === "H" ? "Heads" : "Tails"}</li>
  ))
  return(
    <section>
      <div>
        <button onClick = {() => handleClick("H")}>Heads</button>
        <button onClick = {() => handleClick("T")}>Tails</button>
      </div>
      <ul>
        
        {lis}
        <li>Heads: {counts["H"]}</li>
        <li>Tails: {counts["T"]}</li>
        
        </ul>
    </section>
  )
}
export default CoinTossCounter;