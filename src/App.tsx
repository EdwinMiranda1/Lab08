import { useState } from 'react'
import './App.css'
import Button from './Components/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Contador</h1>
      <div className="card">
       <Button/>
      </div>
    </>
  )
}

export default App
