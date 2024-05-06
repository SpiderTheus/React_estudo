import { useState } from 'react'
import Spider from './assets/spider-punk.jpg'
import CondicionalRender from './components/CondicionalRender'
import ListRend from './components/ListRend'
import MenageData from './components/MenageData'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragments from './components/Fragments'
import Container from './components/Container'
import ExecuteFuction from './components/ExecuteFuction'
import Menssage from './components/Menssage'
import ChangeMensageState from './components/ChangeMensageState'


function App() {
  /* const name = "Derek" */
  const [userName] = useState("Maria");

  const cars = [
    {id: 1, brand: "Fiat", color:"Prata", newCar: true, km: 0},
    {id: 2, brand: "Subaru", color:"Azul", newCar: false, km: 64700},
    {id: 3, brand: "Volkswagen", color:"Preto", newCar: true, km: 0},
  ];

  function showMensage() {
    console.log("Evento do componente pai!")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => (
    setMessage(msg)
  );

  return (
      <div>
        <h1>Avançando em React</h1>
        <ListRend />
        <CondicionalRender />
        {/* props */}
        <ShowUserName  name={userName} />
        {/* destruing props */}
        <CarDetails brand= "VW" km={100000} color="Azul" newCar={false}/>
        
        {/* Reaproveitamento */}
        <CarDetails brand= "Ford" km={895413} color="preto" newCar={false}/>
        <CarDetails brand= "Honda" km={0} color="branco" newCar={true}/>

        {/* Loop em arrary de objetos */}

        {cars.map((car) => (
          <CarDetails 
          key={car.id}
          brand={car.brand} 
          color={car.color} 
          km={car.km} 
          newCar={car.newCar} />
        ))}


        {/* Imagem em public */}
        <div>
          <img src="/camp.jpg" alt="Torcedores" />
        </div>
        {/* Imagem em assent */}     
        <div>
          <img src={Spider} alt="homem-aranha punk" />
        </div> 
        <MenageData />

        {/* Fragimentos */}  
        <Fragments propFragment="teste"/>
        {/* Children */}
        <Container myValue="testing">
          <p>E este é o conteudo</p>
        </Container> 
        <Container myValue="testing 2">
          <p>E este é o conteudo</p>
          <h3>Holiday</h3>
        </Container> 
        <Container myValue="testing 3">
          <p>E este é o conteudo</p>
          <img src="/cats-tres.png" alt="" />
        </Container> 

        {/* Executar Função */}
        <ExecuteFuction myFunction={showMensage} />  

        {/* State lift */}
        {console.log(message)}
        <Menssage msg={message} />  
        
        <ChangeMensageState handleMessage={handleMessage} />



      </div>
    
  )
}

export default App
