function EventosClick() {
  var namebtn = 'Botão de evento';
  var contador = 0;

  function handleClick() {
    console.log('Clicou no botão!');
  }

  return (
    <div>
      <button onClick={handleClick}>Clique aqui</button>

      <button onClick={() => console.log('Clicou no segundo botão!')}>
        Clique aqui também
      </button>

      <button onClick={() => console.log(contador++)}>{namebtn}</button>
    </div>
  );
}

export default EventosClick;
