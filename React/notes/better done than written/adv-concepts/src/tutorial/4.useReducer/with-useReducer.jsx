import React, {useReducer} from 'react'
import Modal from '../../exComponents/Modal'
import {data} from '../../db/peopleDS'

//normalmente em outro arquivo
const reducer = (oldState, action) => {
    //sempre deve retornar algo
    switch (action.type) {
        case 'ADD_PERSON':
        const newList = [...oldState.list, action.payload]
        return {
            ...oldState,
            list: newList,
            isModalOpen: true,
            ModalContent: 'item added'
        }
        
        case 'NO_INPUT':
        return {
            ...oldState,
            isModalOpen: true,
            ModalContent: 'must provide text'
        }
        
        case 'CLOSE_MODAL':
        return {
            ...oldState,
            isModalOpen: false
        }

        case 'REMOVE_ITEM':
        const renewedList = oldState.list.filter((person) => person.id !== action.payload)
        return {
            ...oldState,
            list: renewedList
        }
    
        default:
        console.log('Action not exist');
        return oldState;
    }
}

//all states in 'one' state
const defaultState = {
    list: [],
    isModalOpen: false,
    ModalContent: 'Bananas'

}

export default function Basics() {
  const [inputText, setInputText] = React.useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);
  const submitHandler = (e) => {
    e.preventDefault();
    if(inputText){
      const newPerson = {
        id: new Date().getTime().toString(),
        name: inputText
      }
      dispatch({type: 'ADD_PERSON', payload: newPerson}); //sempre dever conter essa type property
      setInputText('');
    }else{
        dispatch({type: 'NO_INPUT'})
    }
  }
  const closeModal = () => {
    dispatch({type:'CLOSE_MODAL'})
  }

  return (
    <>
    {state.isModalOpen && <Modal closeModal={closeModal} content={state.ModalContent}/>}
    <h2>Person list</h2>
    <form onSubmit={submitHandler}>
        <input required type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
        <button type='submit'>add</button>
    </form>
    <div>
        {
            state.list.map((person) => {
                return <div className='items-container'
                key={person.id}>
                    <h2>{person.name}</h2>
                    <button
                    className='delete-item'
                    onClick={() => dispatch({type:'REMOVE_ITEM', payload: person.id})}
                    >X</button>
                </div>
            })
        }
    </div>
    </>
  )
}

// useReducer, vai pegar um state e uma função para modificar ele reducer(Ela é passada como argumento) e o valor inicial do state
// De modo a alterar esse State sempre deve-se passar/ser validado pelo reducer. O reducer recebe duas coisas: 
//O estado anterior/antes da ação, e a ação que resultou na mudança do estado. Essa ação precisa ser 'dispachada' pelo dispatch

//junto varios 'estados' em 1 'estado' -> se quiser alterar algo, faço o dispatch do 'tipo' da ação -> ação vai ser analisada/filtrada pelo reducer --> se correto, faz a modificação