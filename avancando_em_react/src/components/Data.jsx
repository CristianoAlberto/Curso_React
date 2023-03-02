import { useState } from "react"

const Data = () => {
    let someData = 10;

    const [annotherNumber, setAnotherNumber] = useState(15);
    return (
        <div>
            <div>
                <p>Valor: {someData}</p>
                <button onClick={()=>setAnotherNumber(5)}>Mudar valor</button>
            </div>
            <div>
                <p>Valor: {annotherNumber}</p>
                <button onClick={()=>setAnotherNumber(20)}>Mudar valor para 20</button>
            </div>

        </div>
    )
}

export default Data
