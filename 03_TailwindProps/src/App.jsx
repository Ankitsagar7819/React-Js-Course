import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj ={
    name : "Ankit",
    age : 19
  }

  let newArr = [1, 2, 3, 4,5, 6]



  return (
    <>
     <h1 className='bg-green-400 text-red-500 p-4 rounded-xl mb-4'  >Tailwind Css Test</h1>
     <Card userName ="Chai or react"  btnText= "Click Me"/>
     <Card userName='Ankit' btnText= "Visit Me"/>
    
     
    </>
  )
}

export default App
