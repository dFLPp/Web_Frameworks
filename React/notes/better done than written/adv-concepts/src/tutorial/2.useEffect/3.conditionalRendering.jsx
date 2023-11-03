import React, {useState, useEffect} from 'react'
const url = 'https://api.github.com/users/dFLPp'

function Render(){
    const [isLoading, setIsLoading] = useState();
    const [isError, setIsError] = useState();
    const [user, setUser] = useState('');
    
    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        fetch(url)
          .then((resp) => {
                if(resp.status >= 200 && resp.status <= 299) return resp.json()
                else{
                    setIsLoading(false);
                    setIsError(true);
                    throw new Error(resp.statusText)
                }
          })
          .then((user) => {
              setUser(user.login);
              setIsLoading(false);
          })
          .catch((error) => console.log(error))
    }, [])

    if(isLoading) return <h2>Loading...</h2>
    if(isError) return <h2>An Error ocourred</h2>
    if(user) return <h2 key={user.id}>{user}</h2>
}

export default Render

//Multiple returns
//Podemos ter diversos 'returns' para o component 'Render'.
//Ex: se o user existe mostre o seu nome, se não mostre a pagina de login.
//Perceba a flexibilidade/poder disso.