import { useState, useEffect, useContext } from 'react'
import { myContext } from './Context';
import './App.css'

function App() {
  const [stateImg, setStateImg] = useState([]);
  const [state, setState] = useState({
    number: '1',
    random: 'random'
  });
  const ctx = useContext(myContext)
  console.log(ctx.data);
  const call = async () => {
    const response = await fetch(`https://dog.ceo/api/breeds/image/${state.random}/${state.number}`)
    const responseJson = await response.json()
    console.log(responseJson);
    setStateImg(responseJson.message)
  }

  useEffect(() => {
    
    call()
  }, [state.number]);
  

  const handleChange = (e) => {
    const {name, value} = e.target
    console.log(name, value);
    setState((prev) => ({
      ...prev,
      [name]: e.target.value
    }))
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      {
        stateImg?.map((dog) => <img style={{width: '50px', height: state.number == 1 ? '50' : '20'}} key={dog} src={dog}></img>)
      }
        <input type='number'  name='number' onChange={handleChange} value={state.number}></input>      
        <input type='text' name='random' onChange={handleChange} value={state.random}></input>      
        <button type="button" onClick={call}>change</button>
    </>
  )
}

export default App
