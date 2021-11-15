
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee'

import Employees from './components/Employees'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Router>
        <Switch>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route path="/employees">
            <Employees />
          </Route>
          <Route path='/addEmployee'>
            <AddEmployee />
          </Route>
          <Route path="/editEmployee">
            <EditEmployee />
          </Route>
          
        </Switch>

      </Router>


    </div>
  );
}

export default App;
