import React, {useState, useEffect} from 'react'

const url = 'https://api.github.com/users';

function Fetch(){
    //initialy empty
    const [users, setUsers] = useState([]);
    
    const getData = async(url) => {
        const rawData = await fetch(url);
        const jsonData = await rawData.json();
        setUsers(jsonData);
    }
    //fetching data
    useEffect(() => {
        getData(url);
    }, [])

    return(
    <>
    <ul>
        {
            users.map((user) => {
                return(
                <li key={user.id}>
                    <img src={user.avatar_url} alt={user.login}></img>
                    <a href={user.html_url}><p>{user.login}</p></a>
                </li>
                )
            })
        }
    </ul>
    </>
    )
}

export default Fetch

/*
O objetivo desse exemplo é mostrar que, sem o '[]' no useEffect iria ocorrer um loop infinito.
Cuidado com o que escreve!
*/