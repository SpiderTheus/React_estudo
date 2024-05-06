import { useState } from "react";

const MenageData = () => {
    let someData = 10;

    const [number, setNumber] = useState(15)

  return (
    <div>
        <div>
            <p>valor: {someData}</p>
            <button onClick={() => {someData = 15}}>Mudar Variavel</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => {setNumber(25)}}>Mudar State</button>
        </div>
    </div>
  )
}

export default MenageData
