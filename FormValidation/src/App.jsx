import { useState } from 'react'
import './App.css'
import Form from './Component/Form'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hi There</h1>
      <Form />
 
    </>
  )
}

export default App
