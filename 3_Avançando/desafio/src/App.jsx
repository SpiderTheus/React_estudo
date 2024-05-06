
import './App.css'
import UserDetails from './components/UserDetails'


function App() {
  const pessoas = [
    {id: 1, nome:"Matheus", brand:"predeiro", age: 12},
    {id: 2, nome:"João", brand:"cozinheiro", age: 67},
    {id: 3, nome:"Jennifer", brand:"atriz", age: 15},
  ]
  return (
    <>
      <h1>Desafio 4</h1>
      <div>
        {pessoas.map((users) => (
            <UserDetails key={users.id} nome={users.nome} brand={users.brand} age={users.age} /> 
          )) 
        }
      </div>
    </>
  )
}

export default App
