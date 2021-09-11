import UseStateToggle from './UseStateToggle';
import './App.css';
import ReducerToggle from './ReducerToggle';
import UseStateCounter from './UseStateCounter';
import ReducerActions from './ReducerActions';
import UserContext from './UserContext';
import {useState} from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
function App() {

/*
You use Provider like any other component.
Has a value prop that is the data you want available to any of the children components that need
The data from username is now available inside all child components defined inside of provider
*/




const [userName, setUserName] = useState("Frank")


  return (
    <div className="App">
      <UseStateToggle/>
      <ReducerToggle/>
      <UseStateCounter/>
      <ReducerActions/>
      <UserContext.Provider value={{userName, setUserName}}>
        <Header/>
        <Main/>
        <Footer/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
