import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import ShowKills from './components/ShowKills';
import KillFormHandler from './components/KillFormHandler';
import Bounty from './Bounty.jpg' 



function App() {
  const [kills, setKIlls] = useState([]);


  const getKills = () => {
    axios.get('/kills')
    .then(res => setKIlls(res.data))
    .catch(err => console.log(err))
  }

  const addKill = (newKill) => {
    axios.post('/kills', newKill)
    .then(res => {
      console.log(res.data);
      setKIlls(prevKill =>[...prevKill, res.data])//res.data is new kill
    })
    .catch(err => console.log(err))
  }

  const deleteKill = (killId) => {
    axios.delete(`/kills/${killId}`)
    .then(res => {
      console.log(killId);//killId is id of deleted kill
    setKIlls(prevKill => prevKill.filter(kill =>kill._id !== killId))//Pushing all kills besides deleted kill into state
    
    })
    .catch(err => console.log(err))
  }

  const editKill= (updates, killId) => {
    axios.put(`/kills/${killId}`, updates)
    .then(res => {
      setKIlls(prevKill => prevKill.map(kill =>  kill._id !== killId ? kill : res.data)
    )})
    .catch(err => console.log(err))
  }
  
  useEffect(() => {
    getKills()
  }, [])
  
  
  const killsMap = kills.map((kill,index) =>  //Kills have everything in it. Getting data from state
    <ShowKills
    {...kill} //Spreading out all kills 
    
    deleteKill = {deleteKill} //Passing functions to ShowKills
    editKill = {editKill}
    key = {index}/>)
  
  
  
  
  
  
  return (
    

  
 <div className="App">
   <img src={Bounty} className="App-logo" alt="logo" />
   <h1 className='banner'>HIT-LIST</h1>
   <KillFormHandler btnText = 'Add Kill' submit = {addKill}/>
   
    {killsMap}
    </div>
  );
}

export default App;
