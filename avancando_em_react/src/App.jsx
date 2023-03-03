import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import anime from './assets/imagem2.jpg'
import Data from './components/Data'
import ListeRender from './components/ListeRender'
import CondicionalRender from './components/CondicionalRender'
import ShowUserName from './components/ShowUserName'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{paddingBotton: "500px"}}>
      <h1>Avançando em react</h1>
      <img src="imagem1.jpg" alt='Alguma imagem'/>
      <img src={anime} alt='outra imagem'/>

      <Data/>
      <ListeRender/>
      <CondicionalRender/>
      <ShowUserName name="Chris"/>
    </div>
  )
}

export default App
