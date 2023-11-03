import React, {useRef, useState} from 'react'

export default function reactForm() {
  const inputContainer = useRef(null); //inicialmente inputContainer tem um property, 'current' que é null
  const [userName, setUserName] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputContainer.current) //monstrando que o useRef pega o elemento HTML em si
    setUserName(inputContainer.current.value);
    inputContainer.current.value='';
  }

  return (<>
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="name"><p>Name:</p></label>
        {/* linkando um elemento do html com useRef (usa-se a prop 'ref') */}
        <input type='text' name='name' required ref={inputContainer}/>
        <br/>
        <button type='submit'>submit</button>
      </form>
      <p>{userName}</p>
    </div>
  </>)
}

//useRef é um hook tem varias utilidades, uma delas é referenciar um elemento do DOM
//dessa forma usa-se 'useRef' para pegar a referencia de um component/elemento
//OBS: ele vai conservar o valor e NÃO vai fazer o re-render.