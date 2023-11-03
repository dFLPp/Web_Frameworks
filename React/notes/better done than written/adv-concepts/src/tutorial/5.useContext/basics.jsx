import React from 'react'
import {data} from '../../db/peopleDS'

const listContext = React.createContext();
//vai criar um provider (de onde os dados saem) e um/varios consumers

export default function Basics() {
  const [people, setPeople] = React.useState(data);
  const changeRootStateByRemovingPerson = (id) => {
    setPeople((oldPeople => {
        return oldPeople.filter(person => person.id !== id)
    }))
  }
  return (
    <listContext.Provider value={{people, changeRootStateByRemovingPerson}}>
    <div>
        <h2>root component</h2>
        <List/>
    </div>
    </listContext.Provider>
  )
}

//fazendo varios components em um arquivo, só para não criar arquivos de exemplo

const List = () => {
    const recoveredData = React.useContext(listContext);
    return <>
    <h3>list component</h3>
    {
        recoveredData.people.map(person => {
            return <Person key={person.id} {...person}/>
        })
    }
    </>
}

const Person = ({id, name}) => {
    //pegando uma função do no component 'nivel 1 (root)' aqui no 'nivel 3'
    const {changeRootStateByRemovingPerson} = React.useContext(listContext);
    return <>
        <h4>Person component - {name} <button onClick={() => changeRootStateByRemovingPerson(id)}>X</button></h4>
    </>
}

//useContext é usado quando você quer passar algum estado, ou maneira de modificar o estado, para outro component, mais abaixo na component tree
//Você tecnicamente pode fazer isso sem esse hook, passando a função/valor como argumento no component (prop drilling)
//OBS: useContext não faz magica, ele só permite compartilhar dados/funções de um jeito mais direto.