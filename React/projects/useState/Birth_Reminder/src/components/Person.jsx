import React, { useState } from 'react'

function Person(props) {
    return (
    <>
    <div key={props.id} className='person'>
        <div>
        <img
        onClick={() => remove(props.id)}
        src={props.image}/>
        </div>
        <div>
        <p>{props.name}</p>
        <p>{props.age} years</p>
        </div>
    </div>
    </>
    )
}

export default Person