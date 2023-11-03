import React from 'react'
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users';
const url2 = 'https://icanhazdadjoke.com/'

export default function Basics() {
  const [list, setList] = React.useState([]);
  const [joke, setJoke] = React.useState('123');
  
  const getData = async () => {
    try {
        const resp = await axios.get(url);
        setList(resp.data);
    } catch (error){
      console.log(error.response)
    }
  }

  const getJoke = async () => {
    try {
        const {data} = await axios.get(url2, {
            headers: {Accept: 'application/json'}
        });
        console.log(data);
        setJoke(data.joke);
    } catch (error){
      console.log(error.response)
    }
  }

  React.useEffect(() => getData, [])

  return (
    <div> 
        {
          list.map((item, idx) => <h3 key={idx}>{item.username}</h3>)
        }
        <div>{joke}</div>
        <button onClick={getJoke}>?</button>
    </div>
  )
}

/*
- retorna uma promise
- dados em resp.data
- error em error.response
- segundo parametro - headers (depende do method)
*/