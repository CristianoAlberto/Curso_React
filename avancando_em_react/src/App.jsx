import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Avançando em react</h1>
      <img src="imagem1.jpg" alt='Alguma imagem'/>
    </div>
  )
}

export default App
