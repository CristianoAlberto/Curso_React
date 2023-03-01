import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FirstComponent from './components/FirstComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Fundamentos do React</h1>
      <FirstComponent></FirstComponent>
    </div>
  )
}

export default App
