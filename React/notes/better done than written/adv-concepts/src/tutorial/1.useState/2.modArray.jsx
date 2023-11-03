import React, { useState } from "react";
import {data} from '../../db/peopleDS'

const ArrayEX = () => {
    const [people, setPeople] = useState(data);
    const fun = (e) => {
        if(people.length === 0){
            setPeople(data)
             e.target.innerHTML = "clear all";
        }
        else{
            setPeople([]) 
            e.target.innerHTML = "get all";
        }
    }

    const remove = (id) => {
        setPeople(() => people.filter((person) => person.id !== id))
    }

    return(
    <>
    {
        people.map((person) => {
        const {name, id} = person; 
        return(
            <>
            <div className='item' key={id}>
                <h4>{name}</h4>
                <span>
                    <svg onClick={() => remove(person.id)} 
                    xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                </span>
            </div>
            </>
        )
        })
    }
    <button onClick={fun}>clear all</button>
    </>
    )
}

export default ArrayEX;

/*
OBSs: 
- Quando você usa o 'onClick', se a função tem algum argumento, ela vai ser executada automaticamente para previnir isso usa-se '() => {func}'
- Repare que, quando nos chamamos o method/hook 'useState', passamos como argumento o valor atual do item, e então, quando ele é modificado, nós chamamos o 'setFunc' para atualizar e re-renderizar o component
- Você só pode usar useState dentro de um component e o nome dele deve começar com letra maiuscula
*/