import EventosClick from './EventosClick';
import ImagesNoReact from './ImagesNoReact';

function SecudadyComponent() {
  return (
    <div>
      <h2>Componente Secundário</h2>
      <p>Este é o componente secundário importado em App.jsx</p>
      <EventosClick />
      <ImagesNoReact />
    </div>

    
  );
}

export default SecudadyComponent;
