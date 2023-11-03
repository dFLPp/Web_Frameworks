import React from 'react'
import { useState } from 'react';
import {useGlobalContext} from '../context/index'
import { useNavigate } from 'react-router-dom';
import { Error } from '.';

export default function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const {setUser} = useGlobalContext();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    try {
      if(!username || !email) return;
      const tempUser = {username, email};
      setUser(tempUser);
      navigate('/dashboard');
    } catch (error) {
      return <Error />
    }
  }
  return (<>
     <main>
      <div className="inPageCenter">
        <h1>log-in mixuruca</h1>
        <form onSubmit={submitHandler}>
          <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" required name='username' placeholder='username'/>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" required name='email' placeholder='email'/>
          <button type='submit'>{'->'}</button>
        </form>
      </div>
    </main>
  </>)
}
