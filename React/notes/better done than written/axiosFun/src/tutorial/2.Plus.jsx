import React from 'react'
import axios from 'axios'

//const url = 'https://jsonplaceholder.typicode.com/users';

//custom axios instance
const customFetch = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {Accept: 'application/json'}
})

//Interceptors
customFetch.interceptors.request.use(request => {
  console.log('request sended');
  return request;
}, (error) => Promise.reject(error))

customFetch.interceptors.response.use((response) => {
  console.log('response recieved');
  return response;
}, (error) => {
  if(error.response.status === 404) console.log("NOT FOUND");
  return Promise.reject(error);
})

export default function Other() {
  const [list, setList] = React.useState([]);
  const getList = async () => customFetch.get('/users')
  .then(({data}) => setList(data)).catch(err => console.log(err.response));
  React.useEffect(() => getList, [])
  
  const sendPost = async () => {
    try {
      const res = await customFetch.post('/posts', {
      body: JSON.stringify({
        title:'123',
        body:'456',
        userID:1
        }),
      })
      console.log(res.status);
    } catch (error) {
      console.log(error.response);
    }

  }
  return (<>
    <div>{
      list.map(item => <h4 key={item.id}>{item.username}</h4>) 
    }
    <button onClick={sendPost}>send</button>
    </div>
  </>)
}

// Ex: axios.post(url, {json: 'data'}, {auth header, etc...})

//Interceptors (tipo middlewares) 'hidratam' a request/esponse antes de serem enviadas/recebidas
