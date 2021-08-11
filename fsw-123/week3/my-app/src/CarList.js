import Car from "./Car";

function CarList({cars, addCar}){

  const carList = cars.map((car) => <Car key = {car.id} car = {car}/>)

  return(
    <>
    {carList}


    <button onClick = {() => addCar("BMW", "323")}>Add Car </button>
    </>
  )
}

export default CarList;