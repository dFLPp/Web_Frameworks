import React, { useState } from 'react'
import Person from './Person'
import data from '../db/data'

function List() {
    const [list, setList] = useState(data);
    const resp = () => {
        if(list.length === 0){
            document.getElementById('btn').innerHTML = 'clear'
            setList(data);
        }
        else{
            document.getElementById('btn').innerHTML = 'refresh';
            setList([]);
        }
    }

    return(
    <>
    <main className='main'>
    <div className='container'>
        <h1>{list.length} birthdays today</h1>
        <section className='listContainer'>
            {
                list.map((person) => {
                    return(
                        <Person
                        image={person.image}
                        age={person.age}
                        name={person.name}
                        id={person.id}
                        />
                    )
                })
            }
        </section>
        <button id='btn' onClick={() => resp()}>clear</button>
    </div>
    </main>
    </>
  )
}

export default List