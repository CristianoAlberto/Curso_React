import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FirstComponent from './components/FirstComponents'
import TemplateExpression from './components/TemplateExpression'
import MyComponent from './components/MyComponet'
import Events from './components/Events'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>Fundamentos do React</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
    </div>
  )
}

export default App
