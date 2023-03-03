import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import anime from './assets/imagem2.jpg'
import Data from './components/Data'
import ListeRender from './components/ListeRender'
import CondicionalRender from './components/CondicionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'

function App() {
  const [count, setCount] = useState(0)

  const cars = [
    {id: 1, brand: "Kia", color: "verde", km: 0 },
    {id: 2, brand: "Hyundai", color: "Amarelo", km: 123321221 },
    {id: 3, brand: "Toyota", color: "Cinza", km: 13212121 }
  ]

  return (
    <div className="App" style={{paddingBotton: "500px"}}>
      <h1>Avançando em react</h1>
      <img src="imagem1.jpg" alt='Alguma imagem'/>
      <img src={anime} alt='outra imagem'/>

      <Data/>
      <ListeRender/>
      <CondicionalRender/>
      <ShowUserName name="Chris"/>
      <CarDetails brand="VW" km={999} color="Branco"/>
      <CarDetails brand="Fiat" km={99124129} color="Preto"/>

    {cars.map((cars)=>(
      <CarDetails
        key={cars.id}
        brand={cars.brand}
        color={cars.color}
        km={cars.km}
      />
    ))}
    </div>
  )
}

export default App
