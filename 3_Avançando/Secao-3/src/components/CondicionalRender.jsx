import { useState } from "react"

const CondicionalRender = () => {
    const [x] = useState(false);

    const [name, setName] = useState("Matheus");

  return (
    <div>
      <h1>Isso será escrito:</h1>
      {x && <p>se x for true, sim!</p>}
      {!x && <p>agora x é falso</p>}


      <h1>If ternario</h1>
      {name === "João" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>O nome não é João</p>
        </div>
      )}
      <button onClick={() => setName("João")}>Clique aqui</button>

    </div>
  )
}

export default CondicionalRender
