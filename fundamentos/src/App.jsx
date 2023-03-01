import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FirstComponent from './components/FirstComponents'
import TemplateExpression from './components/TemplateExpression'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>Fundamentos do React</h1>
      <FirstComponent/>
      <TemplateExpression/>
    </div>
  )
}

export default App
