

const UserDetails = ({nome, brand, age}) => {
   
  return (
    <div>
        <h2>Olá {nome} </h2>
        <h3>trabalho: {brand}, idade: {age} </h3>
        {age >= 18 ? ( <p>Você poderá tirar a habilitação</p> ) : ( <p>Você não poderá tirar a habilitação</p> )}

    </div>
  )
}

export default UserDetails
