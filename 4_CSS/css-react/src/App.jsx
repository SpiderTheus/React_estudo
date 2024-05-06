
import './App.css'
import MeuTItulo from './assets/components/MeuTItulo.jsx'
import MeusComponents from './assets/components/MeusComponents.jsx'

function App() {
  const n = 10
  const tituloO = false

  return (
    <>
      
        {/* css global */}
        <div>
          <h1>CSS - REACT</h1>
          <p>PIRIPAU</p>
        </div>
        
        {/* css de component */}
        
        <MeusComponents />

        {/* inline dinamico */}

        <h2 style={n < 15 ? ({color: 'purple'}) : ({color: "red"})}>MATHEUS</h2>

        {/* CLasse Dinamica */}
        <h2 className={tituloO ? ("tituloO") : ("reserva")}>Esse titulo vai ter classe dinamica</h2>
      
      {/* modules */}
      <MeuTItulo />

    </>
  )
}

export default App
