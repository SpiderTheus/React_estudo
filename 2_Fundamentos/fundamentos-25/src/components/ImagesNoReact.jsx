import bebop from '../assets/bebop-capa.jpg'

function ImagesNoReact() {  
  return (
    <div>
      <h1>Imagens no React</h1>
      <img src="/5W2H.png" alt="Os 5 W e 2 H " />

      <h1>Imagens no React com assets</h1>
      <img src={bebop} alt="Capa do cawboy bepop" />
    </div>
  )
}

export default ImagesNoReact;
