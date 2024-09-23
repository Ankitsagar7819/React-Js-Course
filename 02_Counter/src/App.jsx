import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

 
  const addValue = () => {
   
     setCounter(counter + 1)
  }

    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)

  

  const removeValue = () => {

     setCounter(counter - 1)
  }
 // Interview Prectice Question

    // setCounter(prevCounter => prevCounter -1)
    // setCounter(prevCounter => prevCounter - 1)
    // setCounter(prevCounter => prevCounter - 1)
    // setCounter(prevCounter => prevCounter - 1)

  


  return (
    <>

      <h1>Chai or React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>  Add Value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>

    </>
  )
}

export default App
