import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import './App.css';
import Header from './components/container/Header'
import Body from './components/container/Body'
import Footer from './components/container/Footer'



function App(props) {
  return (
    <>
  
    <div className = 'appContainer'>
  <BrowserRouter>
    <div className="App">
     <br />
     <Header/>
        <Body/>
     <Footer/>
     </div>
  
  
  </BrowserRouter>
  </div>
  </>
  );
}

export default App;
