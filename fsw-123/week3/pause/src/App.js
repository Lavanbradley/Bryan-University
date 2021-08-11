import {useState} from "react"
import DisplayGreeting from "./DisplayGreeting"
// import './App.css';
// import Car from './Car.js'




function App() {
const [cars, setCars] = useState([
  {
    model: "Ford",
    brand: "Mustang"
  },
  {
    model: "Honda",
    brand: "Civic"
  },
  {
    model: "Subaru",
    brand: "Impreza"
  }
])




  // const car = {
  //   brand: "Ford",
  //   model: "Mustang",
  //   color: "red",
  //   year: 1964
  // }

  const changeCar = (model, brand) => {
  const newCars = [...cars,  //Makes copy of cars array
    {
      model: model,
      brand: brand
    }
    
  ]
  setCars(newCars)



    // car.brand = "Honda",
    // car.model = "Civic",
    // car.color = "gold",
    // car.year = "2018"

    
  }
const carList = cars.map((car, index)=> <div key = {index}>{car.model} {car.brand}</div>)

const [greeting, setGreeting] = useState("Good Morning")
const changeGreeting = () => {
  setGreeting("Good night")
}

  return (
    <div className="App">
      <h3>My Cars</h3>
      <div>{carList}</div>
      <button onClick = {()=> changeCar("BMW", "323")}>Change Car</button>

      <DisplayGreeting greeting = {greeting} />
      <button onClick = {changeGreeting}>Change greeting</button>
    </div>
  );
}

export default App;
