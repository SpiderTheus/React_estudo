
import './App.css'
import MyForm from './assets/components/MyForm'

function App() {
  

  return (
    <>
      <h2>FORM</h2>
      <MyForm user={{name: "diego", email: "diego@exemplo.com"}} />
    </>
  )
}

export default App
