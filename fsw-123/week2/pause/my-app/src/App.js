
import './App.css';
import Greeting from './Greeting'
import Picture  from './Picture';
import Button from './Button';

function App() {

  const image = {
    id: 1,
    src: "https://placekitten.com/200/300",
    desc: "My cat",
    location: "California" 
  }
  return (
    <>

<Picture src = {image.src}>
  <h3>{image.desc}</h3>
  <h5>I live in {image.location}</h5>
  <Button/>
</Picture>




    {/* <Greeting message = "Good morning"/> */}
    
    </>
  );
}

export default App;
