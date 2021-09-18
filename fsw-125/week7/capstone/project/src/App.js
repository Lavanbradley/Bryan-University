import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import ShowData from './components/ShowData'
import DataFormHandler from './components/DataFormHandler';
function App() {
  const [myData, setData] = useState([]);

  const getData = () => {
    axios.get('/data')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }

  const addData = (newData) => {
    var newTeam = { ...newData, players: newData.players.split(",") }
    axios.post('/data', newTeam)
      .then(res => {
        console.log(res.data);
        setData(prevData => [...prevData, res.data])//res.data is new kill
      })
      .catch(err => console.log(err))
  }

  const deleteData = (dataId) => {
    axios.delete(`/data/${dataId}`)
      .then(res => {
        console.log(dataId);
        setData(prevData => prevData.filter(index => index._id !== dataId))

      })
      .catch(err => console.log(err))
  }

  const editData = (updates, dataId) => {
    axios.put(`/data/${dataId}`, updates)
      .then(res => {
        setData(prevData => prevData.map(index => index._id !== dataId ? index : res.data)
        )
      })
      .catch(err => console.log(err))
  }


  useEffect(() => {
    getData()
  }, [])


  const dataMap = myData.map((data, index) =>
    <ShowData

      {...data}
      deleteData={deleteData}
      editData={editData}
      key={index} />
  )


  return (
    <div className="App">
      <h1 className="capstoneHeader">CAPSTONE PROJECT</h1>
      <DataFormHandler btnText='Add Data' submit={addData} />
      {dataMap}
    </div>
  );
}

export default App;
