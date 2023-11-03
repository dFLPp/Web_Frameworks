import React, { useState } from "react";

const Counter = () => {
    let [value, setValue] = useState(0)
    let [newValue, setNewValue] = useState(0)
    const lazy = () => {
        console.log('bananas')
        setTimeout(() => {
            setNewValue((prevValue) => {
                return prevValue + 1
            })
        }, 2000)
    }
    return(
        <>  
        <div style={{backgroundColor: '#747474'}}>
            <h2>Banana Counter</h2>
            <p>{value}</p>
            <button onClick={() => {setValue(--value)}}>-</button>
            <button onClick={() => {setValue(0)}}>!</button>
            <button onClick={() => {setValue(++value)}}>+</button>
        </div>

        <div style={{backgroundColor: '#444444'}}>
            <h2>Abacate Counter</h2>
            <p>{newValue}</p>
            <button onClick={lazy}>...</button>
        </div>
        </>
    )
}

export default Counter;

/*
No segundo couter, estamos contornando o fato de que 'setNewValue' é async, ou seja, se eu clicar 500 vezes, antes dos 2s, o valor só vai aumentar em 1. 
Entretanto se eu usar uma função dentro do 'setNewValue', ela vai ser capaz de pegar o valor atual (que ainda não foi renderizado) e então modifcar ele. 
Estamos usando setTimeout só para demonstrar que é async. Saiba que usar functions dentro do useState é opicional em alguns casos e em outros, necessário. 
O parametro que você passa é automaticamente o utimo valor do 'value'. Em [value, setValue] = useState("value"); 'setValue((oldV) => {})'; 'oldV' seria "value"
*/