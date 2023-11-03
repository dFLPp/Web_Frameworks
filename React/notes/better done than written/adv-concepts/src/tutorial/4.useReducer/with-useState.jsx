import React, {useState} from 'react'
import Modal from '../../exComponents/Modal'
import {data} from '../../db/peopleDS'

//Modo padrão

export default function Basics() {
  const [showModal, setShowModal] = useState(false);
  const [people, setPeople] = useState(data);
  const [inputText, setInputText] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if(inputText){
      setShowModal(true);
      setPeople([...people, {id: new Date().getTime().toString(), name: inputText}]);
      setInputText('');

    }else{
      setShowModal(true);
    }
  }

  return (<>
  {showModal && <Modal/>}
  <form onSubmit={submitHandler}>
    <input required type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
    <br/>
    <button type='submit'>add</button>
  </form>
  <div>
    {
    people.map((person) => {
      return (
      <h2 key={person.id}>{person.name}</h2>
    )})
    }
  </div>
  </>)
}

//useReducer é uma alternativa ao useState. Quando você tem muitos states e/ou eles são complexos, ou quando o proximo estado depende
//do anterior, ele é bem vindo. Dá pra tranformar apps com useState em useReducer. useReducer é a base para entender Redux
