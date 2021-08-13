

import './App.css';
import Card from './Card';
function App() {
const item1 = {
  title: "Title 1",
  subTitle: "Sub Title 1",
  description: "Hello World 1",
  
}
const style1 = {
  backgroundColor: "red",
  width: "300px"
}

const item2 = {
  title: "Title 2",
  subTitle: "Sub Title 2",
  description: "Hello World 2"
}
const style2 = {
  backgroundColor: "orange",
  width: "300px"
}
const item3 = {
  title: "Title 3",
  subTitle: "Sub Title 3",
  description: "Hello World 3"
}
const style3 = {
  backgroundColor: "yellow",
  width: "300px"
}
const item4 = {
  title: "Title 4",
  subTitle: "Sub Title 4",
  description: "Hello World 4"
}
const style4 = {
  backgroundColor: "green",
  width: "300px"
}

  return (
    <div className="App" >
     <Card {...item1} style = {style1}/> 
     <Card {...item2} style = {style2}/> 
     <Card {...item3} style = {style3}/> 
    
     <Card {...item4} style = {style4}/> 

  
     
    </div>
    
  );
}

export default App;
