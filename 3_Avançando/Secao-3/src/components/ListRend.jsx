import { useState } from "react"

const ListRend = () => {
    const [list] = useState(["Matheus", "Jehan", "David", "Joan", "Guirlheme"])
    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 20},
        {id: 2, name: "Julie", age: 32},
        {id: 3, name: "Jennifer", age: 87},
        {id: 4, name: "Leticia", age: 18},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 5);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        });
    }

  return (
    <div>
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
        
        <div>
            <ul>
                {users.map((user) => {
                   return (
                        <li key={user.id}>
                            {user.name} -- tem {user.age} anos;
                        </li> 
                   ) 
                })}
            </ul>
        </div>
        <div>
            <button onClick={deleteRandom}>delete random user</button>
        </div>
    </div>
  )
}

export default ListRend
