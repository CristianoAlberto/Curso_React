import { useState } from "react"

const ListeRender = () => {

    const [list] = useState(["Chris", "Alberto", "Demolidor"]);
    
    const [users, setUsers] = useState([
        {id:1, name:"Chris", age: 19},
        {id:2, name:"Alberto", age: 20},
        {id:3, name:"Demolidor", age: 25}
    ])
    return (
        <div>
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) =>(
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListeRender