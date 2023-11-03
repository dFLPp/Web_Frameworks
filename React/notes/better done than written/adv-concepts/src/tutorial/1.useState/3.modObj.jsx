import React, { useState } from "react";
import { log } from '../../db/peopleDS'

const ObjEX = () => {
    //just 1 useState for all object
    // const [user, setUser] = useState(log);
    // const changeMSG = () => {
    //     setUser({...log, message: 'Abacate'})
    // }

    //multiple useStates
    const [name, setName] = useState(log.name);
    const [age, setAge] = useState(log.age);
    const [message, setMessage] = useState(log.message);

    return(
        <>
        <div style={{backgroundColor: 'gray'}}>
            <h2>{name}</h2>
            <h4>{age}</h4>
            <p>{message}</p>
        </div>
        <button onClick={() => setName('Ba')}>change name</button>
        <button onClick={() => setAge('na')}>change age</button>
        <button onClick={() => setMessage('nas')}>change msg</button>
        </>
    )
}

export default ObjEX;
