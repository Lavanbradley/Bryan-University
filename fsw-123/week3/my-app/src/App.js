import { useState } from 'react';
import CarList from "./CarList"
import {v4 as uuidv4} from "uuid"
import './App.css';

function App() {

  const [cars, setCars] = useState([
    {
      id: uuidv4(),
      model: "Ford",
      brand: "Mustang"
    },
    {
      id: uuidv4(),
      model: "Honda",
      brand: "Civic"
    },
    {
      id: uuidv4(),
      model: "Subaru",
      brand: "Impreza"
    }
  ]);

const addCar = (model, brand) => {

const newCars = [...cars,
{
  id: uuidv4(),
  model: model,
  brand: brand


}
]
setCars(newCars)
}


  return (
    <div className="App">
      <h3>My Cars</h3>
      <CarList cars = {cars} addCar = {addCar} />
    </div>
  );
}

export default App;
